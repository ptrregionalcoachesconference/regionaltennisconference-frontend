// "use client";
// import React from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// // import { Button } from "./ui/button";

// interface NavitemsProps  {
//     isScrolled: boolean;
// }

// const Navitems = ({isScrolled} : NavitemsProps) => {
 
//   const pathname = usePathname();
//   return (
//     <ul className="md:flex hidden  space-x-4 ">
//       {links.map((link, index) => {
//         const isActive: boolean = pathname === link.path;
//         return (
//           <div key={index}>
//             <li
//               className={`group ${
//                 isActive && `underline underline-offset-10 decoration-white`
//               } ${link.name === "Register" ? "bg-red-100 px-3 py-1 rounded-lg" : ""}`}
//             >
//               <Link href={link.path}>{link.name}</Link>
//             </li>
          
//           </div>
//         );
//       })}
//     </ul>
//   );
// };

// export default Navitems;
