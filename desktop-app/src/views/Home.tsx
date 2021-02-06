import React from 'react';
import Table from '../components/Table';

export default function Home() {
  return (
    <div className="window">
      <header className="toolbar toolbar-header">
        <h1 className="title">项目备忘录</h1>
      </header>
      <div className="window-content">
        <Table></Table>
      </div>
      <footer className="toolbar toolbar-footer">
        <h1 className="title">
          <a
            href="https://github.com/vvizden/project-memo"
            target="_blank"
            rel="noreferrer"
          >
            Copyright vviz.
          </a>
        </h1>
      </footer>
    </div>
  );
}
