import ViewUserButton from "./ViewUserButton"; // pendefenisian bahwa di card list ada compnents csr yang bernama view user button

const CardList = ({ children }: any) => {
  return (
    <div className="text-info text-center p-4 ms-4">
      {children} {/* ini akan disi oleh pages post */}
    </div>
  );
};

export default CardList;
