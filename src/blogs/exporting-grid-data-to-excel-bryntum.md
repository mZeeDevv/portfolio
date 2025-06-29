# Exporting Grid Data to Excel file | Bryntum

*Published on January 20, 2025 • 5 minute read*

Ever thought of exporting your grid data to an Excel file with just one click? If yes, it's not that hard. Bryntum allows you to export the grid data to an Excel file effortlessly. Exporting grid data to Excel can significantly enhance productivity and streamline workflows. With Bryntum, achieving this functionality is straightforward and user-friendly.

![Bryntum Grid with Export options](./images/bryntum-grid-export.png)

We already learned about simple Bryntum grid, if you haven't yet checkout this post for complete information and implementation of simple Bryntum Grid. Have a look at [live demos](https://bryntum.com/products/grid/examples/).

In this blog, we will explore how to export grid data to an Excel file. Here are some key points we'll cover today:

- DataGenerator
- Adding the Export functionality

## DataGenerator

If you are new to Bryntum components, exporting grid data to an Excel file can be an incredibly useful feature for you. Additionally, if you're looking to test the Bryntum Grid, the DataGenerator will save you significant time. The `DataGenerator()` is a utility class used for generating mock data for testing and demonstrating the functionalities of Bryntum's components.

### Common Fields in Generated Data

- id
- name  
- city
- age

### Usage

```javascript
import { DataGenerator } from '@bryntum/grid';
```

Once you import DataGenerator you can generate data to use it for testing purposes. You don't have to write the data or don't need any external file to work with the entities. Here is how you can use it:

```javascript
const grid = new Grid({
    appendTo: 'container',
    columns: [
        { text: 'Name', field: 'name', width: 150 },
        { text: 'Age', field: 'age', width: 100 },
        { text: 'City', field: 'city', width: 150 }
    ],
    data: DataGenerator.generateData(50)
});
```

If you are not familiar with columns, we already discussed it in our previous post.

By running this code, the DataGenerator will generate 50 records. This data will be according to the field property in the columns. You can easily generate as many records as you want by passing the number as a parameter in `DataGenerator()` function. For example, for 10 records you can write:

```javascript
data: DataGenerator.generateData(10)
```

## Adding Export Functionality

In order to export the grid data as an Excel file, Bryntum uses a package/library called `zipcelx`. It will help us convert the grid data to an Excel file.

### 👉 Step 1: Install zipcelx library

Zipcelx generates XLSX files in the browser, with minimal footprint. The vision is to provide the smallest possible package for generating valid XLSX files in the browser.

```bash
npm install zipcelx
```

### 👉 Step 2: Add excelExporter to grid's features

In order to use the `excelExporter` feature we need to identify that this package is coming from the zipcelx library. We will modify our code like this:

```javascript
const grid = new Grid({
    appendTo: 'container',
    features: {
        excelExporter: {
            zipcelx: zipcelx
        }
    },
    columns: [
        { text: 'Name', field: 'name', width: 150 },
        { text: 'Age', field: 'age', width: 100 },
        { text: 'City', field: 'city', width: 150 }
    ],
    data: DataGenerator.generateData(50)
});
```

### 👉 Step 3: Add a button

We need a button with an event listener that triggers a function when clicked (function in step 4).

```javascript
const exportButton = new Button({
    appendTo: 'container',
    text: 'Export (default settings)',
    icon: 'b-fa b-fa-file-excel',
    onAction: () => {
        // Export functionality (Step 4)
    }
});
```

In the above code we added a simple button with text "Export (default settings)" and with a simple icon. Bryntum uses Font Awesome icons. You can learn more about adding buttons at [Bryntum button page](https://bryntum.com/products/grid/docs/api/Core/widget/Button).

### 👉 Step 4: Design the table (exportConfigs)

We need to design the columns for Excel just as we did in our grid. In other words, we are instructing the exporter on how to format and organize the data in the Excel file. We need to add a property on the button `onAction` - it will work like `.addEventListener` or `onClick()` function in JavaScript.

```javascript
const exportButton = new Button({
    appendTo: 'container',
    text: 'Export (default settings)',
    icon: 'b-fa b-fa-file-excel',
    onAction: () => {
        grid.features.excelExporter.export({
            filename: 'grid-data',
            exporterConfig: {
                columns: [
                    { text: 'Name', field: 'name' },
                    { text: 'Age', field: 'age' },
                    { text: 'City', field: 'city' }
                ]
            }
        });
    }
});
```

In the above code, we have added the `onAction()` property to a button - this will now export the data in the grid. Please note that it is not important to give it a structure in the code, we can also use the default option to export data. It will simply look like:

```javascript
onAction: () => grid.features.excelExporter.export()
```

## Result

![Excel Export Result](./images/bryntum-excel-result.png)

With just a few lines of code, you now have a fully functional grid that can export its data to Excel format. The exported file will contain all the grid data in a well-structured Excel format, making it easy to share, analyze, or further process the information.

## Next Steps

This tutorial gives you a starting point for creating a grid with export to Excel file features. There are other features and components Bryntum provides. Visit [Bryntum.com](https://bryntum.com) for these mind-blowing components.

- **For live Demo**: [Export to Excel File](https://bryntum.com/products/grid/examples/export/)
- **45-days free trial**: [Bryntum Download](https://bryntum.com/download/)

The Excel export feature is just one of many powerful capabilities that Bryntum Grid offers. You can customize the export format, add styling, include charts, and much more to create professional-looking Excel reports directly from your web application.
