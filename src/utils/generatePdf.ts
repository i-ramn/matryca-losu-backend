import * as puppeteer from 'puppeteer';

export const generatePdf = async (htmlContent: string) => {
  try {
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    await page.setContent(htmlContent);

    // Generate PDF
    await page.pdf({ path: './src/assets/output.pdf', format: 'A4' });

    await browser.close();
  } catch (e) {
    console.error('Error listing files:', e.message);
  }
};

export const generatePdfOfArray = async (htmlContents: string[]) => {
  try {
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    const combinedHtml = htmlContents.join('');

    await page.setContent(combinedHtml);
    await page.pdf({ path: './src/assets/output.pdf', format: 'A4' });
    await browser.close();
  } catch (e) {
    console.error('Error generating PDF:', e.message);
  }
};

export const generatePdfOfObject = async (
  data: any,
  title: string = '',
): Promise<string[]> => {
  const results: string[] = [];

  for (const key in data) {
    const value = data[key];

    let html = '';
    if (typeof value === 'object') {
      const childTitle = title ? `${title} - ${key}` : key;
      const childHtmls = await generatePdfOfObject(value, childTitle);
      html += `<h${Object.keys(data).length}>${key}</h${Object.keys(data).length}>`;
      html += childHtmls.join('');
    } else {
      html += `<h${Object.keys(data).length}>${title ? `${title} - ${key}` : key}</h${Object.keys(data).length}>`;
      html += `<p>${value}</p>`;
    }

    results.push(html);
  }

  return results;
};
