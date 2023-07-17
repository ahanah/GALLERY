import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

var newDocs;
const ImageGrid = ({ setSelectedImg }) => {
  let { docs } = useFirestore("images");
  newDocs = docs;
  const deleteFromStorage = (id) =>{
    newDocs = newDocs.filter((doc) => doc.id !== id);
  };
  deleteFromStorage("uWmTXG7lw86XXTri1lZm");
  deleteFromStorage("JO5XQaqPKdYeXGU9pcdv");
  deleteFromStorage("FoHVHHQnnp8pErghn27e");
  console.log(newDocs);
  return (
    <div className="img-grid">
      {newDocs &&
        newDocs.map((doc) => (
          <motion.div
            className="img-wrap"
            key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
            onClick={() => {
              setSelectedImg(doc.url);
            }}
          >
            <motion.img
              src={doc.url}
              alt="not available"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
