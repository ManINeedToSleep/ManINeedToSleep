declare module '*.glb' {
    const content: string;
    export default content;
}

declare module '*.png' {
    const content: string;
    export default content;
}

declare module '*.vert' {
  const content: string;
  export default content;
}

declare module '*.frag' {
  const content: string;
  export default content;
}

// Define basic mesh element properties
interface MeshElementProps {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  // Add other specific properties as needed
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: MeshElementProps;
      meshLineMaterial: MeshElementProps;
    }
  }
} 