'use client';
import { useState } from 'react';
import { TAB_ACTIVE_VARIANT, tab_content, tab_wrapper } from './Tabs.css';

interface TabContent {
  title: string;
  children: JSX.Element;
}

interface TabsProps {
  TabContents: TabContent[];
}

interface TabProps {
  title: string;
  active: keyof typeof TAB_ACTIVE_VARIANT;
  onTabChange: () => void;
}

function Tabs({ TabContents }: TabsProps) {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  return (
    <>
      <div className={`${tab_wrapper}`}>
        {TabContents.map((content, idx) => {
          return (
            <Tabs.Tab
              title={content.title}
              active={activeIdx === idx ? 'true' : 'false'}
              onTabChange={() => setActiveIdx(idx)}
              key={idx}
            />
          );
        })}
      </div>
      <div className={tab_content}>
        {TabContents.map((content, idx) => {
          if (activeIdx === idx) return <div key={idx}>{content.children}</div>;
        })}
      </div>
    </>
  );
}

Tabs.Tab = function Tab({ title, active, onTabChange }: TabProps) {
  return (
    <div className={TAB_ACTIVE_VARIANT[active]} onClick={onTabChange}>
      {title}
    </div>
  );
};
export default Tabs;
