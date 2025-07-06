import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// Import images
import B1 from '../../blogs/images/B1.png';
import B2 from '../../blogs/images/B2.webp';
import B3 from '../../blogs/images/B3.webp';
import B4 from '../../blogs/images/B4.webp';
import B5 from '../../blogs/images/B5.webp';
import B6 from '../../blogs/images/B6.png';

const ExportingGridDataToExcel = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-portfolio-neutral-50 via-white to-portfolio-accent-50">
      <div className="max-w-4xl mx-auto">
        {/* Back to Blog Link */}
        <Link
          to="/blog"
          className="inline-flex items-center text-portfolio-primary-600 hover:text-portfolio-primary-800 mb-8"
        >
          ← Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-portfolio-neutral-900 mb-4">
            Exporting Grid Data to Excel file | Bryntum
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-portfolio-neutral-600 mb-6">
            <span>January 20, 2025</span>
            <span className="w-1.5 h-1.5 rounded-full bg-portfolio-neutral-400"></span>
            <span>5 minute read</span>
            <span className="w-1.5 h-1.5 rounded-full bg-portfolio-neutral-400"></span>
            <span>By Hamza Khattak</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {['Bryntum', 'JavaScript', 'Excel', 'Data Export', 'Grid'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-sm bg-portfolio-primary-100 text-portfolio-primary-800"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Featured Image */}
          <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
            <img 
              src={B1} 
              alt="Bryntum Grid with Excel Export" 
              className="w-full h-auto"
            />
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none text-portfolio-neutral-800">
          <h1>Exporting Grid Data to Excel file | Bryntum</h1>

          <p><em>Published on: January 20, 2025</em><br />
          <em>Author: Hamza Khattak</em><br />
          <em>Tags: Bryntum, JavaScript, Excel, Data Export, Grid</em></p>

          <hr />

          <p>Bryntum Grid is a powerful JavaScript component for displaying and managing tabular data. One common requirement is exporting grid data to Excel format for further analysis or reporting. This guide demonstrates how to implement Excel export functionality in Bryntum Grid with practical examples and best practices.</p>

          <h2>Overview</h2>

          <p>Bryntum Grid provides built-in support for exporting data to Excel format (.xlsx). The export feature is part of the GridExcelExporter class and can be easily integrated into your application.</p>
          
          <div className="flex justify-center my-8">
            <img 
              src={B2} 
              alt="Bryntum Grid Excel Export Overview" 
              className="rounded-lg shadow-md max-w-full"
            />
          </div>

          <h2>Basic Setup</h2>

          <h3>Installing Dependencies</h3>

          <p>First, ensure you have the Bryntum Grid package installed with Excel export support. You can install it using npm:</p>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-6">
            <pre>
              <code>
{`npm install @bryntum/grid @bryntum/grid-export
// Or using yarn
yarn add @bryntum/grid @bryntum/grid-export`}
              </code>
            </pre>
          </div>

          <h3>Grid Configuration</h3>

          <p>Configure your Bryntum Grid with the Excel export feature enabled:</p>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-6">
            <pre>
              <code>
{`import { Grid } from '@bryntum/grid';
import { ExcelExporter } from '@bryntum/grid-export';

// Initialize the grid with export capabilities
const grid = new Grid({
    appendTo: document.body,
    features: {
        excelExporter: true
    },
    columns: [
        { field: 'name', text: 'Name' },
        { field: 'email', text: 'Email' },
        { field: 'city', text: 'City' }
    ],
    data: [
        { id: 1, name: 'John Doe', email: 'john@example.com', city: 'New York' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', city: 'Boston' },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com', city: 'Chicago' }
    ]
});`}
              </code>
            </pre>
          </div>
          
          <div className="flex justify-center my-8">
            <img 
              src={B3} 
              alt="Bryntum Grid Configuration" 
              className="rounded-lg shadow-md max-w-full"
            />
          </div>

          <h2>Implementation Steps</h2>

          <h3>1. Import Required Modules</h3>

          <p>Import the necessary Bryntum modules including the Grid and ExcelExporter:</p>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-6">
            <pre>
              <code>
{`import { Grid, ExcelExporter } from '@bryntum/grid';
// For React applications
import { BryntumGrid, BryntumExcelExporter } from '@bryntum/grid-react';`}
              </code>
            </pre>
          </div>

          <h3>2. Configure the Grid</h3>

          <p>Set up your grid with columns, data, and export configuration:</p>

          <div className="bg-gray-800 text-white p-4 rounded-md mb-6">
            <pre>
              <code>
{`// Create the export button in your toolbar
const grid = new Grid({
    appendTo: document.body,
    tbar: [
        {
            type: 'button',
            text: 'Export to Excel',
            icon: 'b-fa b-fa-file-excel',
            onClick: () => {
                grid.features.excelExporter.export({
                    filename: 'GridData.xlsx',
                    exporterConfig: {
                        // Excel export configuration
                        sheet: {
                            name: 'Grid Data'
                        }
                    }
                });
            }
        }
    ],
    // Rest of grid configuration
});`}
              </code>
            </pre>
          </div>
          
          <div className="flex justify-center my-8">
            <img 
              src={B4} 
              alt="Excel Export Configuration" 
              className="rounded-lg shadow-md max-w-full"
            />
          </div>

          <h2>Customization Options</h2>

          <h3>Export Settings</h3>

          <p>You can customize various aspects of the Excel export:</p>

          <ul>
            <li><strong>Filename</strong> - Specify the exported file name</li>
            <li><strong>Sheet Name</strong> - Set the Excel worksheet name</li>
            <li><strong>Date Format</strong> - Control how dates are formatted</li>
            <li><strong>Number Format</strong> - Configure number formatting</li>
            <li><strong>Column Width</strong> - Adjust column widths in the exported file</li>
          </ul>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-6">
            <pre>
              <code>
{`// Advanced export configuration
grid.features.excelExporter.export({
    filename: 'SalesReport.xlsx',
    exporterConfig: {
        sheet: {
            name: 'Sales Data'
        },
        columns: {
            // Column-specific configurations
            date: {
                dateFormat: 'YYYY-MM-DD'
            },
            price: {
                numberFormat: '#,##0.00',
                width: 120
            }
        },
        // Add header with company information
        header: {
            rows: [
                {
                    cells: [
                        { value: 'Company Sales Report', style: { fontSize: 16, bold: true } }
                    ]
                },
                {
                    cells: [
                        { value: 'Generated on: ' + new Date().toLocaleDateString() }
                    ]
                }
            ]
        }
    }
});`}
              </code>
            </pre>
          </div>

          <h3>Styling and Formatting</h3>

          <p>The exported Excel file can include:</p>

          <ul>
            <li><strong>Cell Styling</strong> - Colors, fonts, and borders</li>
            <li><strong>Header Formatting</strong> - Custom header styles</li>
            <li><strong>Data Formatting</strong> - Conditional formatting based on data values</li>
          </ul>
          
          <div className="flex justify-center my-8">
            <img 
              src={B5} 
              alt="Styled Excel Export" 
              className="rounded-lg shadow-md max-w-full"
            />
          </div>

          <h2>Advanced Features</h2>

          <h3>Multi-Sheet Export</h3>

          <p>Export data to multiple sheets within a single Excel file:</p>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-6">
            <pre>
              <code>
{`// Multi-sheet export example
exporter.export({
    filename: 'CompanyData.xlsx',
    sheets: [
        {
            name: 'Sales',
            grid: salesGrid
        },
        {
            name: 'Inventory',
            grid: inventoryGrid
        },
        {
            name: 'Customers',
            grid: customerGrid
        }
    ]
});`}
              </code>
            </pre>
          </div>

          <h3>Custom Data Processing</h3>

          <p>Transform or filter data before export using custom processing functions:</p>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-6">
            <pre>
              <code>
{`// Custom data processing before export
grid.features.excelExporter.export({
    filename: 'ProcessedData.xlsx',
    exporterConfig: {
        // Transform data before export
        processRow: (row, record) => {
            // Skip rows with "Confidential" flag
            if (record.confidential) {
                return false; // Exclude this row
            }
            
            // Add calculated fields
            if (record.revenue && record.costs) {
                row.profit = record.revenue - record.costs;
                row.margin = (row.profit / record.revenue * 100).toFixed(2) + '%';
            }
            
            return true; // Include this row with modifications
        }
    }
});`}
              </code>
            </pre>
          </div>

          <h3>Progress Monitoring</h3>

          <p>Show export progress for large datasets:</p>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-6">
            <pre>
              <code>
{`// Export with progress monitoring
grid.features.excelExporter.export({
    filename: 'LargeDataset.xlsx',
    exporterConfig: {
        // Monitor export progress
        onProgress: (progress) => {
            // Update a progress bar
            progressBar.value = progress;
            
            // Show percentage
            statusText.innerHTML = \`Exporting: \${Math.round(progress * 100)}%\`;
        }
    }
});`}
              </code>
            </pre>
          </div>
          
          <div className="flex justify-center my-8">
            <img 
              src={B6} 
              alt="Excel Export in Action" 
              className="rounded-lg shadow-md max-w-full"
            />
          </div>

          <h2>Real-World Example</h2>

          <p>Here's a complete example showing how to implement Excel export in a React application:</p>
          
          <div className="bg-gray-800 text-white p-4 rounded-md mb-6">
            <pre>
              <code>
{`import React, { useRef } from 'react';
import { BryntumGrid } from '@bryntum/grid-react';
import '@bryntum/grid/grid.stockholm.css';

const SalesReportGrid = () => {
    const gridRef = useRef(null);
    
    // Grid configuration
    const gridConfig = {
        columns: [
            { field: 'product', text: 'Product', flex: 2 },
            { field: 'region', text: 'Region', flex: 1 },
            { 
                field: 'quantity', 
                text: 'Quantity', 
                align: 'right',
                renderer: ({ value }) => value.toLocaleString()
            },
            { 
                field: 'unitPrice', 
                text: 'Unit Price', 
                align: 'right',
                renderer: ({ value }) => \`$\${value.toFixed(2)}\`
            },
            { 
                field: 'total', 
                text: 'Total', 
                align: 'right',
                renderer: ({ record }) => \`$\${(record.quantity * record.unitPrice).toFixed(2)}\`
            }
        ],
        data: getSalesData(), // Your data source function
        features: {
            excelExporter: true,
            filterBar: true,
            group: 'region'
        },
        tbar: [
            {
                type: 'button',
                text: 'Export to Excel',
                icon: 'b-fa b-fa-file-excel',
                color: 'b-green',
                onClick: () => handleExport()
            }
        ]
    };
    
    // Export handler function
    const handleExport = () => {
        const grid = gridRef.current?.instance;
        
        if (grid) {
            grid.features.excelExporter.export({
                filename: 'SalesReport.xlsx',
                exporterConfig: {
                    // Include grouped headers
                    includeGroupHeaders: true,
                    
                    // Export only visible rows (respecting filters)
                    onlyVisibleRows: true,
                    
                    // Sheet configuration
                    sheet: {
                        name: 'Sales Report',
                        title: 'Company Sales Report',
                        titleStyle: {
                            fontSize: 18,
                            bold: true,
                            horizontalAlign: 'center'
                        }
                    },
                    
                    // Column configurations
                    columns: {
                        unitPrice: {
                            width: 100,
                            headerStyle: { bold: true },
                            style: {
                                format: '$#,##0.00',
                                horizontalAlign: 'right'
                            }
                        },
                        total: {
                            width: 120,
                            headerStyle: { bold: true },
                            style: {
                                format: '$#,##0.00',
                                horizontalAlign: 'right',
                                // Conditional formatting
                                callback: ({ value }) => {
                                    if (value > 10000) {
                                        return { backgroundColor: '#e6ffec' };
                                    }
                                    if (value < 1000) {
                                        return { backgroundColor: '#ffebe6' };
                                    }
                                    return null;
                                }
                            }
                        }
                    }
                }
            });
        }
    };
    
    return (
        <div className="sales-grid-container">
            <h1>Sales Performance Report</h1>
            <BryntumGrid ref={gridRef} {...gridConfig} />
        </div>
    );
};

export default SalesReportGrid;`}
              </code>
            </pre>
          </div>

          <h2>Browser Support</h2>

          <p>The Excel export feature works in all modern browsers that support:</p>

          <ul>
            <li>File API</li>
            <li>Web Workers (for large datasets)</li>
            <li>Download functionality</li>
          </ul>

          <p>This includes Chrome, Firefox, Safari, and Edge (Chromium-based).</p>

          <h2>Performance Considerations</h2>

          <h3>Optimization Tips</h3>

          <ul>
            <li><strong>Chunked Processing</strong> - Process large datasets in chunks to avoid freezing the UI</li>
            <li><strong>Memory Management</strong> - Dispose of temporary objects after export to prevent memory leaks</li>
            <li><strong>Async Operations</strong> - Use asynchronous processing for better UX during export operations</li>
            <li><strong>Web Workers</strong> - Leverage web workers for heavy processing to keep the UI responsive</li>
            <li><strong>Selective Export</strong> - Export only necessary data by implementing filtering or selection</li>
          </ul>

          <h2>Troubleshooting</h2>

          <h3>Common Problems and Solutions</h3>

          <ol>
            <li>
              <strong>Export button not working</strong>
              <p>Check that the excelExporter feature is properly configured and dependencies are correctly installed.</p>
            </li>
            <li>
              <strong>Formatting issues in Excel</strong>
              <p>Verify column configurations and data types. Ensure date and number formats are correctly specified.</p>
            </li>
            <li>
              <strong>Performance problems with large datasets</strong>
              <p>Implement pagination, filtering, or chunked processing. Consider using web workers for heavy operations.</p>
            </li>
            <li>
              <strong>Missing data in export</strong>
              <p>Check that all required columns are included in the export configuration and that data is loaded properly.</p>
            </li>
          </ol>

          <h2>Conclusion</h2>

          <p>Bryntum Grid's Excel export feature provides a robust and flexible solution for data export requirements. With proper configuration and customization, you can create professional Excel reports directly from your web application with minimal effort.</p>

          <p>The export functionality can be further enhanced with custom styling, multiple sheets, and data transformations to meet specific business requirements. By following the best practices outlined in this guide, you can ensure optimal performance and user experience when implementing Excel export in your Bryntum Grid applications.</p>

          <hr />

          <p><em>Working with Bryntum components? Check out my other tutorials on advanced Bryntum Grid features and integration patterns.</em></p>
        </div>

        {/* Share and Navigate */}
        <div className="mt-16 pt-8 border-t border-portfolio-neutral-200">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h3 className="text-portfolio-neutral-900 font-semibold mb-2">Share this article</h3>
              <div className="flex gap-2">
                <button className="p-2 bg-portfolio-neutral-100 rounded-full hover:bg-portfolio-neutral-200 transition-colors">
                  <span className="sr-only">Share on Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </button>
                <button className="p-2 bg-portfolio-neutral-100 rounded-full hover:bg-portfolio-neutral-200 transition-colors">
                  <span className="sr-only">Share on LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </button>
                <button className="p-2 bg-portfolio-neutral-100 rounded-full hover:bg-portfolio-neutral-200 transition-colors">
                  <span className="sr-only">Share via Email</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex gap-4">
              <Link
                to="/blog/building-scalable-apis-nodejs"
                className="px-4 py-2 border border-portfolio-neutral-300 hover:bg-portfolio-neutral-100 text-portfolio-neutral-700 font-medium rounded-lg transition-colors"
              >
                ← Previous Article
              </Link>
              <Link
                to="/blog/modern-css-techniques"
                className="px-4 py-2 bg-portfolio-primary-600 hover:bg-portfolio-primary-700 text-white font-medium rounded-lg transition-colors"
              >
                Next Article →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportingGridDataToExcel;
