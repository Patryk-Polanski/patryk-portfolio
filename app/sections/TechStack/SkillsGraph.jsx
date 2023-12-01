'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import ForceGraph2D from 'react-force-graph-2d';

import { debounceFunction } from '@/app/utils/helpers';

import Button from '@/app/components/ui/Button';

import { skillsData } from './skillsData';

import './skillsGraph.css';

const IMAGE_SIZE = 37;

function SkillsGraph() {
  const forceRef = useRef(null);
  const containerRef = useRef(null);
  const revealBtnRef = useRef(null);
  const [zoomLevel, setZoomLevel] = useState(1.4);
  const [containerWidth, setContainerWidth] = useState('');
  const [renderGraph, setRenderGraph] = useState(false);

  const debounce = debounceFunction(handleResize, 500);

  useEffect(() => {
    setContainerWidth(containerRef.current.getBoundingClientRect().width);
    const observer = new ResizeObserver(() => {
      debounce();
    });
    observer.observe(containerRef?.current);

    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !renderGraph) {
          if (
            revealBtnRef.current?.getBoundingClientRect().bottom -
              window.innerHeight <
            0
          ) {
            setRenderGraph(true);
          }
        }
      });
    }

    return () => {
      observer.disconnect();
    };
  }, [debounce, renderGraph]);

  useEffect(() => {
    if (!containerWidth || !renderGraph) return;
    forceRef.current
      .d3Force('charge')
      .strength(containerWidth < 1400 ? -400 : -400)
      .distanceMin(60)
      .distanceMax(containerWidth < 1400 ? 250 : 300);
    setTimeout(() => {
      forceRef.current
        .d3Force('link')
        .iterations(1)
        .distance((link) => (containerWidth < 1400 ? 70 : 100));
    }, 1400);
  }, [containerWidth, renderGraph]);

  useEffect(() => {
    if (!containerWidth || !renderGraph) return;
    forceRef.current.zoom(zoomLevel, 200);
  }, [zoomLevel, containerWidth, renderGraph]);

  function handlePlay() {
    setRenderGraph(true);
  }

  function handleReset() {
    forceRef.current.d3ReheatSimulation();
    setZoomLevel(1.4);
  }

  function handleResize() {
    console.log('kshs', containerRef.current.getBoundingClientRect().width);
    setContainerWidth(containerRef.current.getBoundingClientRect().width);
  }

  return (
    <>
      <div
        className='visually-hidden'
        aria-label='Description of the below skill graph'
      >
        Below is a visual graph demonstrating my skills as a web Developer. I
        specialize in front end development, specifically React, Next.js, CSS,
        Tailwind and I have experience working with content management systems
        such as WordPress, Sanity and Shopify.
      </div>
      <div
        aria-hidden='true'
        focusable='false'
        className={`force-graph-section ${
          !renderGraph && 'force-graph-section--initial'
        } hide-cursor`}
        ref={containerRef}
      >
        {!renderGraph ? (
          <div className='force-graph-button render' ref={revealBtnRef}>
            <Button variation='primary' onClick={handlePlay} text='Reveal' />
            <span className='d2'> or press Enter</span>
          </div>
        ) : (
          <div className='force-graph-button reset'>
            <Button variation='primary' onClick={handleReset} text='Reset' />
            <Button
              variation='primary'
              onClick={() => {
                zoomLevel > 0.8 && setZoomLevel((prevZoom) => prevZoom - 0.2);
              }}
              aria-label='Zoom out'
              className='styled-icon'
              text='&minus;'
            />
            <Button
              variation='primary'
              onClick={() => {
                zoomLevel < 3 && setZoomLevel((prevZoom) => prevZoom + 0.2);
              }}
              aria-label='Zoom in'
              className='styled-icon'
              text='+'
            />
          </div>
        )}
        {containerWidth && renderGraph && (
          <ForceGraph2D
            ref={forceRef}
            key={Math.random}
            graphData={skillsData}
            backgroundColor='#14191F'
            nodeLabel='name'
            refresh={true}
            enableZoomInteraction={false}
            width={containerWidth}
            height={containerWidth * 0.666}
            nodeVal={4}
            nodeRelSize={10}
            cooldownTicks={250}
            linkDirectionalParticleColor={(link) => link.color}
            linkDirectionalParticleWidth={6}
            linkDirectionalParticles='speed'
            linkDirectionalParticleSpeed={(d) => d.speed * 0.003}
            nodeCanvasObjectMode={() => 'after'}
            nodeColor={(node) => node.color}
            linkCurvature={0.2}
            linkColor={(link) => '#333333'}
            linkWidth={(link) => '3'}
            nodeCanvasObject={(node, ctx, globalScale) => {
              ctx.font = '11px Sans-Serif';
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              ctx.fillStyle = '#A9A9A9';
              ctx.fillText(node.name, node.x, node.y + (IMAGE_SIZE - 4));
              let icon = document.getElementById(`icon-${node.id}`);
              ctx.drawImage(
                icon,
                node.x - IMAGE_SIZE / 2,
                node.y - IMAGE_SIZE / 2,
                IMAGE_SIZE,
                IMAGE_SIZE
              );
            }}
          />
        )}
      </div>
    </>
  );
}

// const MyGraph = withResizeDetector(Graph);

export default SkillsGraph;
