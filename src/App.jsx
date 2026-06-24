import { useState } from "react";
import axios from "axios";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRecipes = async () => {
    try {
      setLoading(true);

      const res = await axios.get("https://recipe-api-production-36b0.up.railway.app/api/recipes");
      setRecipes(res.data);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold text-center mb-6">
        Recipe App
      </h1>

      {/* Button */}
      <div className="flex justify-center mb-6">
        <button
          onClick={fetchRecipes}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl shadow-md transition"
        >
          {loading ? "Loading..." : "Fetch Recipes"}
        </button>
      </div>

      {/* Recipe Cards */}
      <div className="grid md:grid-cols-3 gap-4">
        {recipes.map((r) => (
          <div key={r._id} className="bg-white p-4 rounded-xl shadow">

            <h2 className="text-xl font-bold">{r.name}</h2>
            <p className="text-gray-600">{r.cuisine}</p>

            <p className="text-sm mt-2 bg-red-100 text-green-700 text-xs px-2 py-1 rounded-full">
               Prep Time : {r.prepTime} min
               Cook Time : {r.cookTime} min
            </p>
            <p className="text-sm mt-2">
               Total Time : {r.prepTime + r.cookTime} min
            </p>

            <p className="text-sm"> {r.servings} servings</p>

            {/* TAGS */}
            <div className="mt-2 flex flex-wrap gap-1">
              {r.tags?.map((tag, i) => (
                <span
                  key={i}
                  className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* INGREDIENTS */}
            <div className="mt-3">
              <h3 className="font-semibold">Ingredients:</h3>
              <ul className="list-disc ml-5 text-sm text-gray-700">
                {r.ingredients?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* STEPS */}
            <div className="mt-3">
              <h3 className="font-semibold">Steps:</h3>
              <ol className="list-decimal ml-5 text-sm text-gray-700">
                {r.steps?.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default App;
