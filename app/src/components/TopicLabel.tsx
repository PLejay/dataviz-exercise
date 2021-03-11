import React from 'react';

interface Props {
  label: string;
  handleLabelClick: (label: string) => void;
}

function TopicLabel(props: Props) {
  const { label, handleLabelClick } = props;
  const handleClick = () => {
    handleLabelClick(label);
  };

  return (
    <div className="topic-label" onClick={handleClick}>
      {label}
    </div>
  );
}

export default TopicLabel;
