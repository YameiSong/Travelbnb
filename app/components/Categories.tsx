import Image from "next/image";

const Categories = () => {
    return (
        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image
                    src="/images/icn_category_tinyhomes.jpg"
                    alt="Category - Tiny homes"
                    width={20}
                    height={20}
                />
                <span className="text-xs">Tiny homes</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image
                    src="/images/icn_category_tinyhomes.jpg"
                    alt="Category - Tiny homes"
                    width={20}
                    height={20}
                />
                <span className="text-xs">Ting homes</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image
                    src="/images/icn_category_omg.jpg"
                    alt="Category - OMG"
                    width={20}
                    height={20}
                />
                <span className="text-xs">OMG!</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image
                    src="/images/icn_category_treehouses.jpg"
                    alt="Category - Tree houses"
                    width={20}
                    height={20}
                />
                <span className="text-xs">Tree houses</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image
                    src="/images/icn_category_creativespaces.jpg"
                    alt="Category - Creative spaces"
                    width={20}
                    height={20}
                />
                <span className="text-xs">Creative spaces</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image
                    src="/images/icn_category_beachfront.jpg"
                    alt="Category - Beach front"
                    width={20}
                    height={20}
                />
                <span className="text-xs">Beach front</span>
            </div>
        </div>
    );
}

export default Categories;