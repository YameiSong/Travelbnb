import Image from "next/image";

interface CategoriesProps {
  dataCategory: string;
  setCategory: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({
  dataCategory,
  setCategory,
}) => {
  return (
    <>
      <div className="pt-3 cursor-pointer pb-6 flex item-center space-x-12">
        <div
          onClick={() => setCategory("Tiny homes")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "Tiny homes" ? "border-gray-800" : "border-white"
          } opacity-60 hover:border-gray-200 hover:opacity-100`}
        >
          <Image
            src="/images/icn_category_tinyhomes.jpg"
            alt="Category - Tiny homes"
            width={20}
            height={20}
          />
          <span className="text-xs">Tiny homes</span>
        </div>

        <div
          onClick={() => setCategory("OMG!")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "OMG!" ? "border-gray-800" : "border-white"
          } opacity-60 hover:border-gray-200 hover:opacity-100`}
        >
          <Image
            src="/images/icn_category_omg.jpg"
            alt="Category - OMG"
            width={20}
            height={20}
          />
          <span className="text-xs">OMG!</span>
        </div>

        <div
          onClick={() => setCategory("Tree houses")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "Tree houses" ? "border-gray-800" : "border-white"
          } opacity-60 hover:border-gray-200 hover:opacity-100`}
        >
          <Image
            src="/images/icn_category_treehouses.jpg"
            alt="Category - Tree houses"
            width={20}
            height={20}
          />
          <span className="text-xs">Tree houses</span>
        </div>

        <div
          onClick={() => setCategory("Creative spaces")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "Creative spaces"
              ? "border-gray-800"
              : "border-white"
          } opacity-60 hover:border-gray-200 hover:opacity-100`}
        >
          <Image
            src="/images/icn_category_creativespaces.jpg"
            alt="Category - Creative spaces"
            width={20}
            height={20}
          />
          <span className="text-xs">Creative spaces</span>
        </div>

        <div
          onClick={() => setCategory("Beach front")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "Beach front" ? "border-gray-800" : "border-white"
          } opacity-60 hover:border-gray-200 hover:opacity-100`}
        >
          <Image
            src="/images/icn_category_beachfront.jpg"
            alt="Category - Beach front"
            width={20}
            height={20}
          />
          <span className="text-xs">Beach front</span>
        </div>
      </div>
    </>
  );
};

export default Categories;
