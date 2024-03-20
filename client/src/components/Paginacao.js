// import React from "react";

// const max_items = 5;
// const max_left = (max_items - 1) / 2;

// const Paginacao = ({ limit, total, offset }) => {
//   const current_page = offset ? offset / limit + 1 : 1;
//   const pages = Math.ceil(total / limit);
//   const first = Math.max(current_page - max_left, 1);

//   return (
//     <ul>
//       {Array.from({ length: Math.min(max_items, pages) })
//         .map((_, index) => index + first)
//         .map((page) => (
//           <li key={page}>
//             <button>
//               {page}
//             </button>
//           </li>
//         ))}
//     </ul>
//   );
// };

// export default Paginacao;

import React from "react";

const max_items = 5;
const max_left = (max_items - 1) / 2;

const Paginacao = ({ limit, total, offset, onPageChange }) => {
    const current_page = offset ? offset / limit + 1 : 1;
    const pages = Math.ceil(total / limit);
    const first = Math.max(current_page - max_left, 1);
  
    const handleClick = (page) => {
      onPageChange(page);
    };
  
    return (
      <ul className="flex space-x-2">
        {Array.from({ length: Math.min(max_items, pages) })
          .map((_, index) => index + first)
          .filter((page) => page <= pages) // Filter out pages beyond the total number of pages
          .map((page) => (
            <li key={page}>
              <button
                className={`border rounded px-2 ${
                  page === current_page ? "bg-gray-300" : ""
                }`}
                onClick={() => handleClick(page)}
              >
                {page}
              </button>
            </li>
          ))}
      </ul>
    );
  };

export default Paginacao;
