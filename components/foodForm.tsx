import { useState } from 'react';

const FoodForm = () => {
//     const [form, setForm] = useState({
//         category: '',
//         foodName: '',
//         components: '',
//         notes: '',
//         description: '',
//         price: '',
//         cookingTime: '',
//         menuType: { breakfast: false, lunch: false, dinner: false },
//         image: null,
//         active: false,
//     });
//
//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         const { name, value, type, checked } = e.target;
//         if (type === 'checkbox') {
//             setForm({
//                 ...form,
//                 menuType: { ...form.menuType, [name]: checked },
//             });
//         } else if (type === 'file') {
//             setForm({ ...form, image: (e.target as HTMLInputElement).files![0] });
//         } else {
//             setForm({ ...form, [name]: value });
//         }
//     };
//
//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         // Handle form submission logic
//     };

    return (
        <div className="flex flex-wrap w-3/4 border-b-black border-[1px] rounded-[10px] m-10">
            <form className="w-full h-[608px]">
                <div className="md:flex md:items-center mb-6 p-4">
                    <div className='w-1/2 mt-10 ml-4'>
                        <div className="flex mb-3.5">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold mb-1 md:mb-0"
                                    htmlFor="inline-password"
                                >
                                    Category
                                </label>
                            </div>
                            <div className="md:w-3/4">
                                <input
                                    className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-800"
                                    id="category"
                                    type="text"
                                    placeholder=""
                                />
                            </div>
                        </div>
                        <div className="flex mb-3.5">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold mb-1 md:mb-0"
                                    htmlFor="inline-password"
                                >
                                    First Name
                                </label>
                            </div>
                            <div className="md:w-3/4">
                                <input
                                    className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-800"
                                    id="first-name"
                                    type="text"
                                    placeholder=""
                                />
                            </div>
                        </div>
                        <div className="flex mb-3.5">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold mb-1 md:mb-0"
                                    htmlFor="inline-password"
                                >
                                    Components
                                </label>
                            </div>
                            <div className="md:w-3/4">
                                <input
                                    className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-800"
                                    id="components"
                                    type="text"
                                    placeholder=""
                                />
                            </div>
                        </div>
                        <div className="flex mb-3.5">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold mb-1 md:mb-0"
                                    htmlFor="inline-password"
                                >
                                    Description
                                </label>
                            </div>
                            <div className="md:w-3/4">
                                <input
                                    className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-800"
                                    id="description"
                                    type="text"
                                    placeholder=""
                                />
                            </div>
                        </div>
                        <div className="flex mb-3.5">
                            <div className="md:w-3/4">
                                <label
                                    className="block text-gray-500 font-bold mb-1 md:mb-0"
                                    htmlFor="last-name"
                                >

                                </label>
                            </div>
                            <div className="md:w-3/4 flex justify-between px-4">
                                <button
                                    className='w-[150px] h-[30px] border border-black rounded-[6px] ml-[-100px] text-black'>Choose
                                    File
                                </button>
                                <p className='text-black'>No File Chosen</p>
                            </div>
                        </div>
                        <div className="flex mb-3.5">
                            <div className="md:w-3/4">
                                <label
                                    className="block text-gray-500 font-bold mb-1 md:mb-0"
                                    htmlFor="last-name"
                                >
                                    Image
                                </label>
                            </div>
                            <div className="md:w-3/4">
                                <div className='w-full h-[150px] border-b-black border-[1px]'></div>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 mt-[-45px] ml-8'>
                        <div className="flex mb-3.5">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold mb-1 md:mb-0"
                                    htmlFor="inline-password"
                                >
                                    Price
                                </label>
                            </div>
                            <div className="md:w-3/4">
                                <input
                                    className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-800"
                                    id="category"
                                    type="text"
                                    placeholder=""
                                />
                            </div>
                        </div>
                        <div className="flex mb-3.5">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold mb-1 md:mb-0"
                                    htmlFor="inline-password"
                                >
                                    Cooking Time
                                </label>
                            </div>
                            <div className="md:w-3/4">
                                <input
                                    className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-800"
                                    id="first-name"
                                    type="text"
                                    placeholder=""
                                />
                            </div>
                        </div>
                        <div className="flex mb-3.5">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold mb-1 md:mb-0"
                                    htmlFor="inline-password"
                                >
                                    Menu Type
                                </label>
                            </div>
                            <div className="md:w-3/4">
                                <div className='flex w-[200px] mb-3.5 justify-between ml-8 pl-20'>
                                    <input type='checkbox'
                                           className="appearance-none border-2 w-[10px] h-[10px] border-gray-200 rounded py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-800"
                                           id="components"
                                           name='breakfast'
                                           placeholder=""
                                    />
                                    <input
                                        className="appearance-none border-2 border-gray-200 rounded w-[10px] h-[10px] py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-800"
                                        id="components"
                                        type="checkbox"
                                        name='lunch'
                                        placeholder=""
                                    />
                                </div>
                                <div className='ml-[160px]'>
                                    <input
                                        className="appearance-none border-2 border-gray-200 rounded w-[10px] h-[10px] py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-800"
                                        id="components"
                                        type="checkbox"
                                        name='lunch'
                                        placeholder=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex mb-3.5">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold mb-1 md:mb-0"
                                    htmlFor="inline-password"
                                >
                                    Description
                                </label>
                            </div>
                            <div className="md:w-3/4">
                                <input
                                    className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-800"
                                    id="description"
                                    type="text"
                                    placeholder=""
                                />
                            </div>
                        </div>
                        <div className="flex mb-3.5">
                            <div className="md:w-3/4">
                                <label
                                    className="block text-gray-500 font-bold mb-1 md:mb-0"
                                    htmlFor="last-name"
                                >

                                </label>
                            </div>

                        </div>
                        <div className="flex mb-3.5">
                            <div className="md:w-3/4">
                                <label
                                    className="block text-gray-500 font-bold mb-1 md:mb-0"
                                    htmlFor="last-name"
                                >
                                    Active
                                </label>
                            </div>
                            <div className="md:w-3/4">
                                <input
                                    className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-800"
                                    id="description"
                                    type="text"
                                    placeholder=""
                                />
                            </div>
                        </div>
                        <div className="md:w-3/4 flex justify-between px-4">
                            <button
                                className='w-[100px] h-[30px] border border-black rounded-[6px]  text-black'>Reset
                                File
                            </button>
                            <button
                                className='w-[100px] h-[30px] border border-black rounded-[6px] text-black'>Save
                                File
                            </button>
                        </div>
                    </div>


                </div>
            </form>
        </div>
    )
        ;
}


export default FoodForm;
