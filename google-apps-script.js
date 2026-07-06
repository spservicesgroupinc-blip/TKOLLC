// INSTRUCTIONS FOR DEPLOYMENT:
// 1. Go to https://script.google.com and create a new project (or use your existing one).
// 2. Paste this entire code into the Code.gs file, REPLACING any existing code.
// 3. Run the setup() function ONCE from the editor. It will automatically create a new Google Sheet named "T.K.O Construction Leads" in your Drive to store submissions.
// 4. Run the setupPortfolio() function ONCE from the editor. It will create a "T.K.O Construction Portfolio" folder in your Drive.
// 5. Click "Deploy" -> "New Deployment" (IMPORTANT: Do NOT use "Manage Deployments" to edit an old one without creating a new version, always select "New Deployment").
// 6. Select type "Web app". Set "Execute as" to "Me", and "Who has access" to "Anyone".
// 7. Click Deploy, authorize any prompts, and copy the Web App URL.
// 8. Add the URL to your app's secrets as VITE_APPS_SCRIPT_URL.

const SHEET_NAME = 'Leads';
const PORTFOLIO_FOLDER_NAME = "T.K.O Construction Portfolio";
const CATEGORIES = ["Custom Homes", "Renovations", "Kitchens & Baths"];

function setup() {
  const scriptProperties = PropertiesService.getScriptProperties();
  let sheetId = scriptProperties.getProperty('SHEET_ID');
  
  if (!sheetId) {
    const ss = SpreadsheetApp.create('T.K.O Construction Leads');
    sheetId = ss.getId();
    scriptProperties.setProperty('SHEET_ID', sheetId);
    
    let sheet = ss.getSheets()[0];
    sheet.setName(SHEET_NAME);
    sheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', 'Message']);
    sheet.getRange("A1:E1").setFontWeight("bold");
    
    Logger.log('Created new spreadsheet with ID: ' + sheetId);
    Logger.log('You can find it in your Google Drive named "T.K.O Construction Leads"');
  } else {
    Logger.log('Spreadsheet already exists with ID: ' + sheetId);
  }
  
  // Dummy call to trigger Gmail authorization during setup
  try {
    GmailApp.getAliases();
  } catch (e) {
    Logger.log("Gmail auth initialized.");
  }
}

function setupPortfolio() {
  const scriptProperties = PropertiesService.getScriptProperties();
  let rootFolderId = scriptProperties.getProperty('PORTFOLIO_FOLDER_ID');
  let rootFolder;

  if (!rootFolderId) {
    // Create the main portfolio folder
    rootFolder = DriveApp.createFolder(PORTFOLIO_FOLDER_NAME);
    rootFolderId = rootFolder.getId();
    scriptProperties.setProperty('PORTFOLIO_FOLDER_ID', rootFolderId);
    
    // Make the folder publicly readable so images can be displayed on the website
    rootFolder.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    
    // Create category subfolders
    CATEGORIES.forEach(category => {
      rootFolder.createFolder(category);
    });
    
    Logger.log('Created new Portfolio Folder with ID: ' + rootFolderId);
    Logger.log('Find it in your Google Drive named: ' + PORTFOLIO_FOLDER_NAME);
    Logger.log('Upload your images into the corresponding category subfolders.');
  } else {
    Logger.log('Portfolio Folder already exists with ID: ' + rootFolderId);
  }
}

// Handle GET requests (Fetching Portfolio Images)
function doGet(e) {
  try {
    const scriptProperties = PropertiesService.getScriptProperties();
    const rootFolderId = scriptProperties.getProperty('PORTFOLIO_FOLDER_ID');
    
    if (!rootFolderId) {
      return ContentService.createTextOutput(JSON.stringify({ 
        status: 'error', 
        message: 'Portfolio not set up. Run setupPortfolio() first.' 
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    const rootFolder = DriveApp.getFolderById(rootFolderId);
    const subFolders = rootFolder.getFolders();
    const portfolioData = [];
    
    while (subFolders.hasNext()) {
      const folder = subFolders.next();
      const categoryName = folder.getName();
      const files = folder.getFiles();
      const images = [];
      
      while (files.hasNext()) {
        const file = files.next();
        // Check if it's an image
        if (file.getMimeType().indexOf('image/') !== -1) {
          images.push({
            id: file.getId(),
            name: file.getName(),
            // URL format to embed Google Drive images
            url: "https://drive.google.com/uc?export=view&id=" + file.getId()
          });
        }
      }
      
      // Sort images by name alphabetically to maintain order
      images.sort((a, b) => a.name.localeCompare(b.name));
      
      if (images.length > 0) {
        portfolioData.push({
          category: categoryName,
          images: images
        });
      }
    }
    
    return ContentService.createTextOutput(JSON.stringify({ 
      status: 'success', 
      data: portfolioData 
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ 
      status: 'error', 
      message: error.toString() 
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle preflight CORS requests
function doOptions(e) {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT)
    .setMimeType(ContentService.MimeType.JSON);
}

// Handle POST requests (Form Submissions and File Uploads)
function doPost(e) {
  try {
    let data = {};
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter;
      }
    } else {
      data = e.parameter;
    }
    
    // Check if this is a file upload action
    if (data.action === 'upload_photo') {
      const scriptProperties = PropertiesService.getScriptProperties();
      const rootFolderId = scriptProperties.getProperty('PORTFOLIO_FOLDER_ID');
      
      if (!rootFolderId) {
        throw new Error('Portfolio not set up. Run setupPortfolio() first.');
      }
      
      const rootFolder = DriveApp.getFolderById(rootFolderId);
      const subFolders = rootFolder.getFolders();
      let targetFolder = null;
      
      while (subFolders.hasNext()) {
        const folder = subFolders.next();
        if (folder.getName() === data.category) {
          targetFolder = folder;
          break;
        }
      }
      
      if (!targetFolder) {
        throw new Error('Category folder not found.');
      }
      
      // Decode base64 data
      const splitBase = data.file.split(',');
      const type = splitBase[0].split(';')[0].replace('data:', '');
      const byteCharacters = Utilities.base64Decode(splitBase[1]);
      const blob = Utilities.newBlob(byteCharacters, type, data.filename);
      
      const file = targetFolder.createFile(blob);
      
      return ContentService.createTextOutput(JSON.stringify({ 
        status: 'success', 
        fileId: file.getId(),
        url: "https://drive.google.com/uc?export=view&id=" + file.getId()
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Otherwise, treat as contact form submission
    const { name, email, phone, message } = data;
    
    // 1. Store in Google Sheets
    const sheetId = PropertiesService.getScriptProperties().getProperty('SHEET_ID');
    if (!sheetId) {
      throw new Error("Setup not completed. Run setup() function first.");
    }
    
    const ss = SpreadsheetApp.openById(sheetId);
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
       sheet = ss.insertSheet(SHEET_NAME);
       sheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', 'Message']);
       sheet.getRange("A1:E1").setFontWeight("bold");
    }
    
    sheet.appendRow([
      new Date(),
      name || '',
      email || '',
      phone || '',
      message || ''
    ]);
    
    // 2. Send Thank You Email
    if (email) {
      sendThankYouEmail(name, email);
    }
    
    return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendThankYouEmail(name, email) {
  const subject = "Thank you for contacting T.K.O Construction LLC";
  
  const htmlBody = `
    <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0f0f0f; color: #e5e5e5; padding: 40px; border-radius: 8px; border: 1px solid #333333;">
      <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #d4af37; font-size: 24px; letter-spacing: 2px; margin: 0; text-transform: uppercase;">T.K.O Construction LLC</h1>
        <div style="height: 2px; background: #d4af37; margin: 15px 0;"></div>
      </div>
      
      <p style="font-size: 16px; line-height: 1.6; color: #a5a9b4;">Dear ${name},</p>
      
      <p style="font-size: 16px; line-height: 1.6; color: #a5a9b4;">
        Thank you for reaching out to T.K.O Construction LLC. We have received your inquiry and appreciate your interest in our services.
      </p>
      
      <p style="font-size: 16px; line-height: 1.6; color: #a5a9b4;">
        Our team of residential construction experts is reviewing your message. Cody Schleman or one of our specialists will get back to you shortly to discuss your project in detail.
      </p>
      
      <p style="font-size: 16px; line-height: 1.6; color: #a5a9b4;">
        We pride ourselves on premium craftsmanship and unwavering reliability for all your custom home and renovation needs.
      </p>
      
      <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #333333;">
        <p style="font-size: 14px; color: #888888; margin: 0 0 10px 0;">Best regards,</p>
        <p style="font-size: 16px; font-weight: bold; color: #ffffff; margin: 0 0 5px 0;">Cody Schleman</p>
        <p style="font-size: 14px; color: #d4af37; margin: 0 0 15px 0;">Founder / CEO</p>
        
        <p style="font-size: 12px; color: #555555; margin: 0;">(219) 424-0212 | info@tkoconstruction.com</p>
      </div>
    </div>
  `;
  
  GmailApp.sendEmail(email, subject, "Thank you for contacting T.K.O Construction LLC. We have received your message and will get back to you shortly.", {
    htmlBody: htmlBody,
    name: "T.K.O Construction LLC"
  });
}
