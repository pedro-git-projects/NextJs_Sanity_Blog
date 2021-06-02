import { Container } from 'react-bootstrap';
import Navbar from './Navbar';
import { useTheme } from 'providers/ThemeProvider';

export default function PageLayout({children, className}) {
  const { theme, toggleTheme } = useTheme();
  return (
         <div className={theme.type}>
     
      <Container>
      <Navbar
          theme={theme}
          toggleTheme={toggleTheme}
        />
      <div className={`page-wrapper ${className}`}>
        {children}
        </div>
        <footer className="page-footer">
          <div>
            <a href="https://www.youtube.com/channel/UCTDv5Dkuxd2F9FZnhpObEFg">Youtube</a>{' | '}
            <a href="https://github.com/pedro-git-projects">Github</a>{' | '}
            <a href="https://www.instagram.com/__pedromartins__/">Instagram</a>
          </div>
        </footer>
      </Container>
      <style jsx global>{`
        html, body {
          background: ${theme.background};
          color: ${theme.fontColor};
          transition: color 0.2s ease-out 0s, background 0.2s ease-out 0s;
        }
      `}
      </style>
    </div>    
  )
}