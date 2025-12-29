import { Container, Text, Box } from '@mantine/core';
import classes from './Footer.module.css';

export function Footer() {
  return (
    <Box component="footer" className={classes.footer}>
      <Container size="xl">
        <div className={classes.content}>
          <Text size="sm" c="dimmed">
            &copy; 2024 Julius Ramon Saga. All rights reserved.
          </Text>
          <Text size="xs" c="dimmed">
            Designed and developed with care
          </Text>
        </div>
      </Container>
    </Box>
  );
}

