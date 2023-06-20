import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  title?: string;
  listItems: (string | React.ReactNode)[];
  icon?: React.ReactNode;
  classname?: string;
  dropdown?: boolean;
};

const containerVariants = {
  hidden: {
    x: 0,
  },
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  show: {
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
    opacity: 1,
    x: 0,
  },
};

const List = (props: Props) => {
  const { title, listItems, icon, dropdown } = props;

  if (dropdown) {
    return <DropdownList title={title} listItems={listItems} icon={icon} />;
  }

  return (
    <div className={"flex flex-col"}>
      <h4 className={"text-xl"}>{title}</h4>
      <motion.ul
        className={"fa-ul"}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
      >
        {" "}
        {listItems.map((item, index) => (
          <motion.li key={index} variants={itemVariants}>
            <span className={"fa-li"}>
              {icon ? icon : <i className={"fas fa-code"} />}
            </span>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

const DropdownList = (props: Props) => {
  const { title, listItems, icon, } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h2 className={"text-xl"}>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <i className={"fas fa-caret-down"} />
          ) : (
            <i className={"fas fa-caret-right"} />
          )}
        </button>
        {title ? ` ${title}` : null}
      </h2>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className={"fa-ul"}
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
          >
            {" "}
            {listItems.map((item, index) => (
              <motion.li key={index} variants={itemVariants}>
                <span className={"fa-li"}>
                  {icon ? icon : <i className={"fas fa-code"} />}
                </span>
                {item}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};

export default List;
