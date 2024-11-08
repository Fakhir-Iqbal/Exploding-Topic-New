'use client'

import { useParams } from "next/navigation";
import { chartDetails } from "../../../resources/data";
import ProButton from "@/components/Buttons/ProButton";
import Chart from "@/components/Chart";
import Link from "next/link";

export default function Topics() {
    const { id } = useParams()
    const chart = chartDetails.find((chart) => chart.id == id)
    console.log(chart)
    return (
        <>
            <div
                className="relative w-full bg-white p-2 border border-transparent transition-colors duration-300 hover:border-[#2E5CE5]"
            >
                {/* Display "hello" in the center without blur effect */}
                {!chart.pro && (
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
                <div className={`${!chart.pro ? 'blur-sm' : ''}`}>
                    <div className="p-3 flex justify-between">
                        <h2 className="text-xl font-bold">{chart.heading}</h2>
                        <div className="flex gap-4">
                            <p className="text-xl font-bold flex flex-col text-indigo-700">
                                {chart.volume}
                                <span className="text-xs text-gray-500 font-medium text-center">Volume</span>
                            </p>
                            <p className="text-xl font-bold flex flex-col text-green-500">
                                {chart.growth}
                                <span className="text-xs text-gray-500 font-medium text-center">Growth</span>
                            </p>
                        </div>
                    </div>
                    <Chart dataPoints={chart.dataPoints} />
                    <p className="text-sm my-4 mx-1 line-clamp-2">{chart.desc}</p>
                    <Link href={chart.btnLink} className="border py-1 px-2 bg-gray-100 text-gray-700 text-sm">
                        {chart.btn}
                    </Link>
                </div>
            </div>
        </>
    )
}
