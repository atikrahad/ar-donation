const Doneted = ({ data }) => {
  const {
    img,
    Title,
    Category,
    Category_BG_Color,
    Card_BG_Color,
    Text_Button_BG_Color,
    Price,
  } = data;
  
  return (
    <div style={{backgroundColor:Card_BG_Color}} className="card  card-side bg-base-100 shadow-xl">
      <figure>
        <img className="w-40 h-full" src={img} alt="Movie" />
      </figure>
      <div className="p-3">
        <button style={{backgroundColor:Text_Button_BG_Color, color:Category_BG_Color}} className="w-24 font-medium rounded-md py-1">{Category}</button>
        <h2 className="font-semibold text-2xl">{Title}</h2>
        <p style={{color:Category_BG_Color }} className="font-semibold">${Price}</p>
        <div className="card-actions">
          <button style={{backgroundColor: Category_BG_Color, color: "white"}} className="py-1 rounded-md px-4">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Doneted;
