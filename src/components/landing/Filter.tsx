import React, { useState, useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import { ChevronDownIcon } from "@iconicicons/react";
import { motion } from "framer-motion";

interface FilterProps {
  categories: { name: string; count: number }[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const Filter: React.FC<FilterProps> = ({
  categories,
  selectedCategory,
  onCategorySelect
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  const handleToggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const handleCategorySelect = useCallback(
    (category: string) => {
      onCategorySelect(category);
      setIsOpen(false);
    },
    [onCategorySelect]
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <FilterContainer ref={filterRef}>
      <FilterWrapper
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <FilterText>{selectedCategory}</FilterText>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transformOrigin: "center"
          }}
        >
          <ChevronDownIcon aria-hidden="true" />
        </motion.div>
      </FilterWrapper>
      {isOpen && (
        <DropdownWrapper role="listbox">
          {categories.map((category) => (
            <DropdownItem
              key={category.name}
              onClick={() => handleCategorySelect(category.name)}
              role="option"
              aria-selected={category.name === selectedCategory}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleCategorySelect(category.name);
                }
              }}
            >
              <span>{category.name}</span>
              <Count>{category.count}</Count>
            </DropdownItem>
          ))}
        </DropdownWrapper>
      )}
    </FilterContainer>
  );
};

export default Filter;

const FilterContainer = styled.div`
  position: relative;
`;

const FilterWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 50px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  background-color: white;
`;

const FilterText = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

const DropdownWrapper = styled.div`
  position: absolute;
  border: 1px solid rgba(0, 0, 0, 0.2);
  right: 0;
  width: 320px;
  z-index: 1;
  margin-top: 8px;
  overflow: hidden;
  background-color: white;
  border-radius: 24px;
`;

const DropdownItem = styled.div`
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: #101828;
  &:hover {
    background-color: rgba(171, 154, 255, 0.1);
  }
`;

const Count = styled.span`
  color: rgba(71, 84, 103, 1);
  margin-left: 16px;
`;
