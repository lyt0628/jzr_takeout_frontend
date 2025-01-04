import React from "react";


const Footer = (props)=>{

    return (
        <footer className="bg-white shadow-md">
        <div className="container mx-auto py-8 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
                <a href="#" className="text-xl font-bold text-gray-800">Jzr外卖</a>
            </div>
            <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-blue-500">店铺合作</a>
                <a href="#" className="text-gray-600 hover:text-blue-500">骑手注册</a>
                <a href="#" className="text-gray-600 hover:text-blue-500">广告合作</a>
                <a href="#" className="text-gray-600 hover:text-blue-500">联系客服</a>
            </div>
            <div className="mt-4 md:mt-0">
                &copy; 2024 Lyt028. 闽ICP备2024073877号-1.
            </div>
        </div>
    </footer>
    );
}

export default Footer;