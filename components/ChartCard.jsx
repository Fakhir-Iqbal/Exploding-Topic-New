'use client'
import React, { useState, useEffect, useRef } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";
import Chart from "./Chart";
import ProButton from "./Buttons/ProButton";
import Link from "next/link";
import Dropdown from "./CustomDropdown";

const options = [
    { value: '1 Month', label: '1 Month', isPro: true },
    { value: '2 Months', label: '2 Months', isPro: true },
    { value: '6 Months', label: '6 Months', isPro: true },
    { value: '2 Years', label: '2 Years' },
    { value: '3 Years', label: '3 Years' },
];

export default function ChartCard() {
    
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const maxPageNumbersToShow = 3;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = chartDetails.slice(startIndex, startIndex + itemsPerPage);

    const totalPages = Math.ceil(chartDetails.length / itemsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Calculate the range of page numbers to display
    const startPage = Math.max(1, currentPage - Math.floor(maxPageNumbersToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxPageNumbersToShow - 1);

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    const handleOptionSelect = (selectedValue) => {
        console.log('Selected option:', selectedValue);
    };


    return (
        <div className="container py-10">

            <div className="flex flex-col justify-center items-center" >
                <h1 className="text-4xl font-bold text-center" >Discover Exploding Topics</h1>
                <p className="text-gray-500 font-medium my-10 text-center" >We surface rapidly growing topics before they take off.</p>

                <div className="flex flex-wrap gap-4 mb-10 items-center " >
                    <p className="text-gray-500 font-semibold text-sm" >Filter By :</p>


                    <Dropdown
                        options={options}
                        label="Future Forecast"
                        onSelect={handleOptionSelect}
                    />


                    <select className="w-36 bg-white border outline-none p-2" >
                        <option className="" >4</option>
                        <option className="" >2</option>
                        <option className="" >3</option>
                    </select>







                    <div
                        className="w-72 bg-white border border-gray-300 rounded-lg text-gray-700 p-2 text-sm text-left flex justify-between items-center"
                    >
                        <FaSearch className="h-4 w-4" />
                        <input className="w-full outline-none mx-3" placeholder="Search Trends" type="text" name="search" id="" />
                        <span className="text-gray-500"><ProButton title={'Pro'} href={'#'} css={'px-2'} /></span>
                    </div>










































                </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {currentItems.map((item, index) => (
                    <div
                        key={index}
                        className="relative w-full bg-white p-2 border border-transparent transition-colors duration-300 hover:border-[#2E5CE5]"
                    >
                        {/* Display "hello" in the center without blur effect */}
                        {!item.pro && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                                <p className="font-bold text-xl flex items-center gap-2" >
                                    <ProButton title={'Pro'} href={'#'} />
                                    Member Only
                                </p>
                                <Link href={'#'} className="text-xl font-bold text-white bg-indigo-600 p-3 mt-3 rounded-[4px]">
                                    Try Exploading Topic Pro
                                </Link>
                            </div>
                        )}

                        {/* Blur effect applies only to the main content */}
                        <div className={`${!item.pro ? 'blur-sm' : ''}`}>
                            <div className="p-3 flex justify-between">
                                <h2 className="text-xl font-bold">{item.heading}</h2>
                                <div className="flex gap-4">
                                    <p className="text-xl font-bold flex flex-col text-indigo-700">
                                        {item.volume}
                                        <span className="text-xs text-gray-500 font-medium text-center">Volume</span>
                                    </p>
                                    <p className="text-xl font-bold flex flex-col text-green-500">
                                        {item.growth}
                                        <span className="text-xs text-gray-500 font-medium text-center">Growth</span>
                                    </p>
                                </div>
                            </div>
                            <Chart dataPoints={item.dataPoints} />
                            <p className="text-sm my-4 mx-1 line-clamp-2">{item.desc}</p>
                            <Link href={item.btnLink} className="border py-1 px-2 bg-gray-100 text-gray-700 text-sm">
                                {item.btn}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>


            {/* Pagination Controls */}
            <div className="flex items-center mt-6 gap-3 ">

                <div className="flex items-center mt-6 gap-3 ">
                    <button
                        onClick={prevPage}
                        disabled={currentPage === 1}
                        className={`px-3 py-2 ${currentPage === 1 ? 'hidden' : 'bg-white text-black'} rounded-sm`}
                    >
                        <GrFormPrevious />
                    </button>

                    {/* Page number buttons */}
                    <div className="flex gap-3">
                        {pageNumbers.map((number) => (
                            <button
                                key={number}
                                onClick={() => setCurrentPage(number)}
                                className={`px-3 py-1 ${currentPage === number ? 'border border-black' : 'bg-white text-gray-200'} rounded-sm`}
                            >
                                {number}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={nextPage}
                        disabled={currentPage === totalPages}
                        className={`px-3 py-2 ${currentPage === totalPages ? 'hidden' : 'bg-white text-black'} rounded-sm`}
                    >
                        <GrFormNext />
                    </button>
                </div>
            </div>

        </div>
    );
}

const chartDetails = [
    {
        heading: 'Sitegpt',
        volume: '100k',
        growth: '+600X+',
        desc: 'Sitegpt is an innovative new product that has taken the market by storm, offering unparalleled features and performance that are revolutionizing the industry. With rapid growth and strong adoption, it is poised to become one of the best tools available today.',
        btn: 'Exploding',
        btnLink: '#',
        pro: true,
        dataPoints: [
            { x: new Date(2008, 0), y: 10.735 },
            { x: new Date(2009, 0), y: 9.102 },
            { x: new Date(2010, 0), y: 5.569 },
            { x: new Date(2011, 0), y: 15.743 },
        ]
    },
    {
        heading: 'EcoTech',
        volume: '300k',
        growth: '+700X+',
        desc: 'EcoTech is leading the charge in creating sustainable energy solutions. By harnessing the power of clean energy and reducing environmental footprints, EcoTech is paving the way for a greener future.',
        btn: 'Go Green',
        btnLink: '#ecotech',
        pro: true,
        dataPoints: [
            { x: new Date(2011, 0), y: 220.735 },
            { x: new Date(2012, 0), y: 230.102 },
            { x: new Date(2013, 0), y: 140.569 },
            { x: new Date(2014, 0), y: 150.743 },
            { x: new Date(2015, 0), y: 160.381 },
        ]
    },
    {
        heading: 'TechBuzz',
        volume: '250k',
        growth: '+450X+',
        desc: 'TechBuzz is a dynamic platform that keeps you at the forefront of the latest technological advancements. With its cutting-edge features, in-depth analysis, and expert insights, it is the go-to resource for anyone interested in the evolving world of tech.',
        btn: 'Discover',
        btnLink: '#techbuzz',
        pro: true,
        dataPoints: [
            { x: new Date(2010, 0), y: 10.735 },
            { x: new Date(2011, 0), y: 60.102 },
            { x: new Date(2013, 0), y: 70.243 },
            { x: new Date(2014, 0), y: 75.381 },
            { x: new Date(2015, 0), y: 95.500 },
        ]
    },
    {
        heading: 'MarketX',
        volume: '500k',
        growth: '+1200%',
        desc: 'MarketX is a groundbreaking platform that is transforming how businesses and investors analyze market trends and data. Offering powerful analytics tools, real-time insights, and intuitive dashboards, MarketX is setting a new standard in market intelligence.',
        btn: 'Learn More',
        btnLink: '#marketx',
        pro: true,
        dataPoints: [
            { x: new Date(2010, 0), y: 80.735 },
            { x: new Date(2011, 0), y: 82.102 },
            { x: new Date(2012, 0), y: 110.270 },
            { x: new Date(2013, 0), y: 115.400 },
        ]
    },
    {
        heading: 'GrowthX',
        volume: '600k',
        growth: '+800X+',
        desc: 'GrowthX has shown exponential growth in a short period, becoming a market leader in the digital transformation space. With a broad range of services and a strong customer base, it continues to set new benchmarks.',
        btn: 'Explore More',
        btnLink: '#growthx',
        pro: false,
        dataPoints: [
            { x: new Date(2015, 0), y: 140.381 },
            { x: new Date(2016, 0), y: 150.406 },
            { x: new Date(2017, 0), y: 160.163 },
            { x: new Date(2018, 0), y: 170.270 },
            { x: new Date(2019, 0), y: 180.500 },
        ]
    },
    {
        heading: 'TechBuzz',
        volume: '250k',
        growth: '+450X+',
        desc: 'TechBuzz is a dynamic platform that keeps you at the forefront of the latest technological advancements. With its cutting-edge features, in-depth analysis, and expert insights, it is the go-to resource for anyone interested in the evolving world of tech.',
        btn: 'Discover',
        btnLink: '#techbuzz',
        pro: true,
        dataPoints: [
            { x: new Date(2015, 0), y: 10.735 },
            { x: new Date(2016, 0), y: 85.163 },
            { x: new Date(2017, 0), y: 90.270 },
            { x: new Date(2018, 0), y: 95.500 },
        ]
    },
    {
        heading: 'EcoTech',
        volume: '300k',
        growth: '+700X+',
        desc: 'EcoTech is leading the charge in creating sustainable energy solutions. By harnessing the power of clean energy and reducing environmental footprints, EcoTech is paving the way for a greener future.',
        btn: 'Go Green',
        btnLink: '#ecotech',
        pro: true,
        dataPoints: [
            { x: new Date(2011, 0), y: 220.735 },
            { x: new Date(2012, 0), y: 230.102 },
            { x: new Date(2013, 0), y: 140.569 },
            { x: new Date(2013, 0), y: 100.500 },
        ]
    },
    {
        heading: 'InnovationHub',
        volume: '1M',
        growth: '+1000X+',
        desc: 'InnovationHub is at the forefront of AI and machine learning applications, enabling businesses to harness the power of data and make intelligent decisions. It is revolutionizing industries and paving the way for a new digital era.',
        btn: 'Discover Hub',
        btnLink: '#innovationhub',
        pro: true,
        dataPoints: [
            { x: new Date(2016, 0), y: 210.163 },
            { x: new Date(2017, 0), y: 220.270 },
            { x: new Date(2018, 0), y: 230.500 },
            { x: new Date(2019, 0), y: 200.500 },

        ]
    },
    {
        heading: 'FutureTech',
        volume: '800k',
        growth: '+1200X+',
        desc: 'FutureTech is a leading player in the field of augmented reality (AR) and virtual reality (VR), creating immersive experiences and enhancing user interaction across industries.',
        btn: 'Future Insights',
        btnLink: '#futuretech',
        pro: false,
        dataPoints: [
            { x: new Date(2012, 0), y: 85.735 },
            { x: new Date(2016, 0), y: 225.500 },
        ]
    },
    {
        heading: 'FinTechX',
        volume: '1.2M',
        growth: '+1500X+',
        desc: 'FinTechX is disrupting the financial sector with its blockchain-based solutions. By creating decentralized financial networks, it is reducing transaction costs and increasing transparency.',
        btn: 'Invest Now',
        btnLink: '#fintechx',
        pro: true,
        dataPoints: [
            { x: new Date(2010, 0), y: 200.735 },
            { x: new Date(2011, 0), y: 290.102 },
            { x: new Date(2012, 0), y: 220.569 },
            { x: new Date(2013, 0), y: 230.743 },
            { x: new Date(2017, 0), y: 270.270 },
        ]
    },
    {
        heading: 'TechBuzz',
        volume: '250k',
        growth: '+450X+',
        desc: 'TechBuzz is a dynamic platform that keeps you at the forefront of the latest technological advancements. With its cutting-edge features, in-depth analysis, and expert insights, it is the go-to resource for anyone interested in the evolving world of tech.',
        btn: 'Discover',
        btnLink: '#techbuzz',
        pro: true,
        dataPoints: [
            { x: new Date(2016, 0), y: 85.163 },
            { x: new Date(2017, 0), y: 90.270 },
            { x: new Date(2018, 0), y: 95.500 },
        ]
    },
    {
        heading: 'EcoTech',
        volume: '300k',
        growth: '+700X+',
        desc: 'EcoTech is leading the charge in creating sustainable energy solutions. By harnessing the power of clean energy and reducing environmental footprints, EcoTech is paving the way for a greener future.',
        btn: 'Go Green',
        btnLink: '#ecotech',
        pro: false,
        dataPoints: [

            { x: new Date(2016, 0), y: 170.406 },
            { x: new Date(2017, 0), y: 280.163 },
            { x: new Date(2018, 0), y: 190.270 },
            { x: new Date(2019, 0), y: 100.500 },
        ]
    },
];
