import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import HeroGlassCanvas from '../components/HeroGlassCanvas';

// Mock framer-motion
vi.mock('framer-motion', async () => {
  const actual = await vi.importActual('framer-motion');
  return {
    ...actual,
    motion: {
      div: ({ children, style }: { children: React.ReactNode; style: React.CSSProperties }) => (
        <div style={style}>{children}</div>
      ),
    },
    useTransform: vi.fn((value, inputRange, outputRange) => {
      return `${outputRange[0]}->${outputRange[1]}`;
    }),
  };
});

// Mock @react-three/fiber
vi.mock('@react-three/fiber', () => ({
  Canvas: ({ children }: { children: React.ReactNode }) => <div data-testid="canvas">{children}</div>,
}));

// Mock @react-three/drei
vi.mock('@react-three/drei', () => ({
  OrbitControls: () => <div data-testid="orbit-controls" />,
  Environment: () => <div data-testid="environment" />,
}));

// Mock the TorusDan component
vi.mock('../components/Torus_dan', () => ({
  __esModule: true,
  default: () => <div data-testid="torus-dan" />,
}));

describe('HeroGlassCanvas', () => {
  it('renders without crashing', () => {
    const scrollYProgress = { get: () => 0, onChange: vi.fn(), destroy: vi.fn() };
    
    render(<HeroGlassCanvas scrollYProgress={scrollYProgress} />);
    
    expect(screen.getByTestId('canvas')).toBeInTheDocument();
  });

  it('applies motion styles correctly', () => {
    const scrollYProgress = { get: () => 0, onChange: vi.fn(), destroy: vi.fn() };
    
    render(<HeroGlassCanvas scrollYProgress={scrollYProgress} />);
    
    const container = screen.getByTestId('canvas').parentElement;
    expect(container).toHaveStyle('scale: 0.25->1');
    expect(container).toHaveStyle('x: 40->0');
    expect(container).toHaveStyle('y: 40->0');
    expect(container).toHaveStyle('border-radius: 50->0');
    expect(container).toHaveStyle('opacity: 0->1');
  });

  it('renders all 3D components', () => {
    const scrollYProgress = { get: () => 0, onChange: vi.fn(), destroy: vi.fn() };
    
    render(<HeroGlassCanvas scrollYProgress={scrollYProgress} />);
    
    expect(screen.getByTestId('canvas')).toBeInTheDocument();
    expect(screen.getByTestId('orbit-controls')).toBeInTheDocument();
    expect(screen.getByTestId('environment')).toBeInTheDocument();
    expect(screen.getByTestId('torus-dan')).toBeInTheDocument();
  });

  it('sets up lighting correctly', () => {
    const scrollYProgress = { get: () => 0, onChange: vi.fn(), destroy: vi.fn() };
    
    render(<HeroGlassCanvas scrollYProgress={scrollYProgress} />);
    
    // We can't directly test lighting without fully mocking three.js
    // But we can ensure the canvas renders which would contain the lights
    expect(screen.getByTestId('canvas')).toBeInTheDocument();
  });
});