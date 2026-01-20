'use client';

import { useState, useEffect } from 'react';
import { Container, Group, Burger, Drawer, Stack, Anchor, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Navbar.module.css';

const links = [
  { link: '#home', label: 'Home' },
  { link: '#about', label: 'About' },
  { link: '#skills', label: 'Skills' },
  { link: '#case-studies', label: 'Case Studies' },
  { link: '#projects', label: 'Projects' },
  { link: '#experience', label: 'Experience' },
  { link: '#contact', label: 'Contact' },
];

export function Navbar() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
    close();
  };

  const items = links.map((link) => (
    <Anchor
      key={link.label}
      href={link.link}
      onClick={(e) => handleLinkClick(e, link.link)}
      className={classes.link}
    >
      {link.label}
    </Anchor>
  ));

  return (
    <Box
      className={classes.navbar}
      style={{
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.95)',
        boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
      }}
    >
      <Container size="xl" style={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
        <Group justify="space-between" h={70}>

          <Group gap="xl" visibleFrom="md">
            {items}
          </Group>

          <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
        </Group>
      </Container>

      <Drawer opened={opened} onClose={close} title="Menu" position="left" padding="xl">
        <Stack gap="md">{items}</Stack>
      </Drawer>
    </Box>
  );
}

