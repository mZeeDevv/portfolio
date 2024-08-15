import React from 'react'
import { useEffect } from 'react';
import BBG1 from './BlogMedia/BBG1.png'
import BBG2 from './BlogMedia/BBG2.webp'
import BBG3 from './BlogMedia/BBG3.webp'
import BBG4 from './BlogMedia/BBG4.webp'
import BBG5 from './BlogMedia/BBG5.webp'
import BBG6 from './BlogMedia/BBG6.png'
import BBG7 from './BlogMedia/BBG7.gif'
export default function FirebaseRules() {
    useEffect(() => {

        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='max-w-6xl md:mx-auto my-5 font mx-3 '>
            <h1 className='font font-bold text-blue-500 text-3xl text-center'>Exporting Grid Data to Excel file</h1>
            <p className='my-4 text-gray-600 md:text-lg'>
                Ever thought of exporting your grid data to an Excel file with just one click? If yes,
                it’s not that hard.
                <span className='text-blue-700 cursor-pointer'><a href='https://bryntum.com/'> Bryntum</a></span> allows you to export the grid data to an Excel file effortlessly. Exporting grid data to Excel can significantly enhance productivity and streamline workflows. With <span className='text-blue-700 cursor-pointer'><a href='https://bryntum.com/'> Bryntum</a></span>, achieving this functionality is straightforward and user-friendly.
            </p>
            <div className='flex justify-center flex-col items-center my-3'>
                <img src={BBG1} alt="add_pro" className='rounded-md md:w-[50%]' />
                <p className=' text-gray-600 font2 font-bold'>Bryntum Grid with Export options</p>
            </div>
            <p className='my-4 text-gray-600 md:text-lg'>
                We already learned about simple Bryntum grid, if you haven’t yet checkout <span className='text-blue-700 cursor-pointer'><a href='https://www.instagram.com/p/C65mZJDuLEl/?utm_source=ig_web_copy_link'> this post</a></span> for complete information and implementation of simple Bryntum Grid. Have a look at <span className='text-blue-700 cursor-pointer'><a href='https://bryntum.com/products/grid/examples/'> live demos</a></span> .
            </p>
            <p className='my-4 text-gray-600 md:text-lg'>
                In this blog, we will explore how to export grid data to an Excel file. Here are some key points we’ll cover today:
                <ol className='list-disc my-2 mx-4'>
                    <li className='my-1'>DataGenerator</li>
                    <li>Adding the Export functionality</li>
                </ol>
            </p>
            <h1 className='text-xl font-semibold my-3'>DataGenerator</h1>
            <p className='my-1 text-gray-600 md:text-lg'>
                If you are new to Bryntum components, exporting grid data to an Excel file can be an incredibly useful feature for you. Additionally, if you’re looking to test the Bryntum Grid, the DataGenerator will save you significant time. The <span className='font-mono bg-[#e7e6e6] text-black'>DataGenerator()</span>  is a utility class used for generating mock data for testing and demonstrating the functionalities of Bryntum's components.
            </p>
            <h1 className='text-xl font-semibold my-3'>Common Fields in Generated Data</h1>
            <ol className='list-disc my-2 mx-4'>
                <li className='my-1'>id</li>
                <li>name</li>
                <li>city</li>
                <li className='my-1'>age</li>
            </ol>
            <h1 className='text-lg font-semibold my-3'>Usage</h1>
            <div className='flex justify-center flex-col items-center my-3'>
                <img src={BBG2} alt="add_pro" className='rounded-md md:w-[50%]' />
                <p className=' text-gray-600 font2 font-bold'>importing DataGenerator</p>
            </div>
            <p className='my-1 text-gray-600 md:text-lg'>
                Once you import DataGenerator you can generator data to use it for testing purposes. You don’t have to write the data or don’t need any external file to like with the entities. Here is how you can use it.
            </p>
            <div className='flex justify-center flex-col items-center my-3'>
                <img src={BBG3} alt="add_pro" className='rounded-md md:w-[50%]' />
            </div>
            <p className='my-1 text-gray-600 md:text-lg text-center'>
                If you are not familiar with columns, we already discussed it <span className='text-blue-700 cursor-pointer'><a href='https://www.instagram.com/p/C6-dYZ4NM8D/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D'> here</a></span>.
            </p>
            <p className='my-3 text-gray-600 md:text-lg'>
                By running this code, the DataGenerator will generate 50 records. This data will be according to the <b className='text-black font-semibold'>field</b> property in the columns. You can easily generate as much as records you want by passing the number as a parameter in <span className='font-mono bg-[#e7e6e6] text-black'>DataGenerator()</span> function. for example, for 10 you can write it
            </p>
            <span className='font-mono bg-[#e7e6e6] text-black'>data : DataGenerator.generateData(10)</span>
            <h1 className='text-xl font-semibold my-3'>DataGenerator</h1>
            In order to export the grid data as excel file Bryntum use a package/library called <span className='text-blue-700 cursor-pointer'><a href="https://github.com/egeriis/zipcelx/wiki/How-to-use#example"> zipcelx</a></span>. It will help us to convert the grid data to an excel file.
            <h1 className='text-lg font-semibold mt-8'>👉 Step 1: Install zipcelx library</h1>
            <p className='my-3 text-gray-600 md:text-lg'>Zipcelx generate XLSX files in the browser, with minimal footprint. The vision is to provide the smallest possible package for generating valid XLSX files in the browser.</p>
            <div className='flex justify-center items-center'>
                <span className='my-6 text-red-600 bg-[#ecebeb] p-3 font-2xl w-[50%] text-center'>npm install zipcelx</span>
            </div>
            <h1 className='text-lg font-semibold mt-8'>👉 Step 2: Add excelExporter to grid’s feature</h1>
            <p className='my-3 text-gray-600 md:text-lg'>In order to use the excelExporter feature we need to identify that this package is coming from zipcelx library, We will modify our code like this.</p>
            <div className='flex justify-center flex-col items-center my-3'>
                <img src={BBG4} alt="add_pro" className='rounded-md md:w-[50%]' />
                <p className=' text-gray-600 font2 font-bold'>adding excelExporter to grid features</p>
            </div>
            <h1 className='text-lg font-semibold mt-8'>👉 Step 3: Add a button</h1>
            <p className='my-3 text-gray-600 md:text-lg'>We need a button with an event listener that triggers a function when clicked (function in step 4).</p>
            <div className='flex justify-center flex-col items-center my-3'>
                <img src={BBG5} alt="add_pro" className='rounded-md md:w-[50%]' />
                <p className=' text-gray-600 font2 font-bold'>adding a button to grid</p>
            </div>
            <p className='my-3 text-gray-600 md:text-lg'>
                In the above code we added a simple button with text “Export (default settings) and with a simple icon, Bryntum uses font awesome icons. You can learn more about adding buttons at <span className='text-blue-700 cursor-pointer'><a href="https://bryntum.com/products/scheduler/docs/#Core/widget/Button"> Bryntum button page</a></span>.
            </p>
            <h1 className='text-lg font-semibold mt-8'>👉 Step 4: Design the table (exportConfigs)</h1>
            <p className='my-3 text-gray-600 md:text-lg'>
                We need to design the columns for Excel just as we did in our grid. In other words, we are instructing the exporter on how to format and organize the data in the Excel file. We need to add a property on the button <b className='text-black font-semibold'>onAction</b> it will work like .addEventListener or onClick() function in JavaScript.
            </p>
            <div className='flex justify-center flex-col items-center my-3'>
                <img src={BBG6} alt="add_pro" className='rounded-md md:w-[50%]' />
            </div>
            <p className='my-3 text-gray-600 md:text-lg'>
                In above code, we have added <b className='text-black font-semibold'>onAction()</b> property to a button this will now export the data in the grid. Please note that it is not important to give it a structure in the code, we can also use default option to export data. It will simply look like
            </p>
            <div className='flex justify-center items-center'>
                <span className='my-6 text-black bg-[#ecebeb] p-3 font-2xl w-[50%] text-center'>onAction : () =&gt; grid.features.excelExporter.export()</span>
            </div>
            <h1 className='text-lg font-semibold mt-8'>Result</h1>
            <div className='flex justify-center flex-col items-center my-3'>
                <img src={BBG7} alt="add_pro" className='rounded-md md:w-[50%]' />
            </div>
            <h1 className='text-lg font-semibold mt-8'>Next Steps</h1>
            <p className='my-3 text-gray-600 md:text-lg'>This tutorial gives you a starting point for creating a grid with export to excel file features. There are other features and components Bryntum provides. visit <span className='text-blue-700 cursor-pointer'><a href="https://bryntum.com/"> Bryntum.com</a></span> for these mind-blowing components.</p>
            <ol className='list-disc my-2 mx-4'>
                <li className='my-1'>For live Demo: <u className='cursor-pointer'><a href="https://bryntum.com/products/grid/examples/exporttoexcel/">Export to Excel File</a></u></li>
                <li>45-days free trail: <u className='cursor-pointer'><a href="https://bryntum.com/download/">Bryntum Download</a></u></li>
            </ol>













        </div>
    )
}
