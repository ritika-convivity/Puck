import { DropZone, type Config } from "@measured/puck";

type Props = {
  Masthead: {};
  Hero: { title: string, description: string }
  HeadingBlock: { title: string };
  TextBlock: {
    description: string,
    textAlign: "left" | "center" | "right";
  };
  ImageBlock: { src: string, alt: string, position: 'left' | 'center' | 'right' };
  Button: { label: string, variant: 'primary' | 'secondary' };
  Space: { size: any };
  Container: {};
  Flex: { direction: 'row' | 'column' }
};

export const config: Config<Props> = {
  // root: {
  //   fields: {
  //     title: { type: 'text' }
  //   },
  //   defaultProps: {
  //     title: "My Page",
  //   },
  //   render: ({ title, children }) => (
  //     <div>
  //       <h1>{title}</h1>
  //       {children}
  //     </div>
  //   )
  // },
  components: {
    Space: {
      fields: {
        size: {
          type: 'select',
          options: [
            { label: "8px", value: "8px" },
            { label: "16px", value: "16px" },
            { label: "24px", value: "24px" },
            { label: "32px", value: "32px" },
            { label: "40px", value: "40px" },
            { label: "48px", value: "48px" },
            { label: "56px", value: "56px" },
            { label: "64px", value: "64px" },
            { label: "72px", value: "72px" },
            { label: "80px", value: "80px" },
            { label: "88px", value: "88px" },
            { label: "96px", value: "96px" },
            { label: "104px", value: "104px" },
            { label: "112px", value: "112px" },
            { label: "120px", value: "120px" },
            { label: "128px", value: "128px" },
            { label: "136px", value: "136px" },
            { label: "144px", value: "144px" },
            { label: "152px", value: "152px" },
            { label: "160px", value: "160px" },
          ]
        },
      },
      defaultProps: {
        size: '24px'
      },
      render: ({ size }) => (
        <div style={{ height: `${size}` }}></div>
      )
    },
    Masthead: {
      render: () => (
        <header className="masthead" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px', padding: '0 10px' }}>
          <img src="https://images.unsplash.com/photo-1687204209659-3bded6aecd79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" alt="logo" width={50} height={50} />
          <nav style={{ display: 'flex', gap: '6px' }}>
            <button>Login</button>
            <button>Account</button>
          </nav>
        </header>
      )
    },
    Hero: {
      fields: {
        title: { type: 'text' },
        description: { type: 'textarea' }
      },
      defaultProps: {
        title: 'Wlecome to ....',
        description: 'Site Description'
      },
      render: ({ title, description }) => (
        <section className="hero">
          <h1>{title}</h1>
          <div className="container">
            <div className="hero-content">
              {description}
            </div>
          </div>
        </section>
      )
    },
    HeadingBlock: {
      fields: {
        title: { type: "text" },
      },
      defaultProps: {
        title: "Heading",
      },
      render: ({ title }) => (
        <div style={{ padding: 64 }}>
          <h1>{title}</h1>
        </div>
      ),
    },
    TextBlock: {
      fields: {
        description: { type: 'textarea' },
        textAlign: {
          type: "radio",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
      },
      defaultProps: {
        description: 'text....',
        textAlign: "left",
      },
      render: ({ description, textAlign }) => (
        <div style={{ padding: '8px' }}>
          <p style={{ fontSize: '20px', color: 'gray', textAlign }}>{description}</p>
        </div>
      )
    },
    ImageBlock: {
      fields: {
        src: { type: 'text' },
        alt: { type: 'text' },
        position: {
          type: 'radio',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' }
          ]
        }
      },
      defaultProps: {
        src: "https://via.placeholder.com/300",
        alt: "Default image",
        position: 'left'
      },
      render: ({ src, alt, position }) => (
        <div style={{ textAlign: position }}>
          <img src={src} alt={alt} width={300} height={200} />
        </div>
      )
    },
    Button: {
      fields: {
        label: { type: 'text' },
        variant: {
          type: 'radio',
          options: [
            { label: 'Primary', value: 'primary' },
            { label: 'Secondary', value: 'secondary' }
          ]
        }
      },
      defaultProps: {
        label: 'button',
        variant: 'primary'
      },
      render: ({ label, variant }) => (
        <button style={{
          backgroundColor: variant === "primary" ? "blue" : "gray",
          color: "white",
          padding: "8px 16px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}>{label}</button>
      )
    },
    Container: {
      render: () => (
        <div>
          <DropZone zone="content" />
        </div>
      )
    },
    Flex: {
      fields: {
        direction: {
          label: 'Direction', type: 'radio', options: [
            { label: 'Row', value: 'row' },
            { label: 'Colums', value: 'column' }
          ]
        },
      },
      defaultProps: {
        direction: 'row'
      },
      render: ({ direction }) => (
        <section style={{ padding: '6px' }}>
          <DropZone zone="Zone-1" style={{ display: 'flex', flexDirection: `${direction}` }} />
        </section>
      )
    }
  },

};

export default config;
