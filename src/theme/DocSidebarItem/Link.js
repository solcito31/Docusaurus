import React from 'react';
import DefaultLink from '@theme-original/DocSidebarItem/Link';
import { FaBook, FaTools } from 'react-icons/fa';

export default function Link(props) {
  const customIcons = {
    intro: <FaBook style={{ marginRight: 6 }} />,
    'manual-inspector': <FaTools style={{ marginRight: 6 }} />,
  };

  const labelWithIcon = (
    <>
      {customIcons[props.item.id] || null}
      {props.item.label}
    </>
  );

  return <DefaultLink {...props} label={labelWithIcon} />;
}
