'use client';

import {
  Container,
  Title,
  Text,
  Group,
  Button,
  Badge,
  Box,
  TextInput,
  Stack,
  Card,
  ActionIcon,
  Modal,
} from '@mantine/core';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import classes from './Hero.module.css';
import { IconTrash, IconEdit } from '@tabler/icons-react';

type CrudItem = {
  id: number;
  email: string;
  firstname: string;
  lastName: string;
};

export function Hero() {
  const [mounted, setMounted] = useState<boolean>(false);


  const [items, setItems] = useState<CrudItem[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);


  const [opened, setOpened] = useState<boolean>(false);


  const [email, setEmail] = useState<string>('');
  const [firstname, setfirstname] = useState<string>('');
  const [lastName, setlastName] = useState<string>('');
  const [emailError, setEmailError] = useState<string | null>(null);


  useEffect(() => {
    setMounted(true);
  }, []);


  const saveItem = (): void => {
    if (!email || !firstname || !lastName) return;
  
    if (!email.includes('@')) {
      setEmailError('Email must contain @');
      return; 
    }
  
    const newItem: CrudItem = {
      id: editingId ?? Date.now(),
      email,
      firstname,
      lastName,
    };
  
    if (editingId !== null) {
      setItems((prev) =>
        prev.map((item) => (item.id === editingId ? newItem : item))
      );
    } else {
      setItems((prev) => [...prev, newItem]);
    }
  
    setEmail('');
    setfirstname('');
    setlastName('');
    setEditingId(null);
    setEmailError(null);
    setOpened(false);
  };

  const editItem = (item: CrudItem): void => {
    setEmail(item.email);
    setfirstname(item.firstname);
    setlastName(item.lastName);
    setEditingId(item.id);
    setOpened(true);
  };

  const deleteItem = (id: number): void => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <Box component="section" id="home" className={classes.hero}>
      <Container size="xl">
        <div className={classes.content}>
          <motion.div
            initial={mounted ? { opacity: 0, y: 20 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={classes.text}
          >
            <Title order={1} className={classes.title}>
              <Text component="span" className={classes.greeting}>
                Hello, I'm
              </Text>
              <Text
                size="4rem"
                fw={400}
                component="span"
                className={classes.name}
                variant="gradient"
                gradient={{ from: 'indigo', to: 'red', deg: 135 }}
              >
                Julius Ramon Saga
              </Text>
            </Title>

            <Text size="xl" fw={500} c="dimmed" mb="md" ta="center">
              UX/UI Designer • Product Designer • Frontend / Full-Stack Developer
            </Text>

            <Text size="lg" c="dimmed" mb="xl" maw={600} ta="center">
              Crafting beautiful, user-centered digital experiences with 3+ years
              of expertise in design and 1+ year of development.
            </Text>

            <Group gap="md" mb="xl" justify="center">
              <Badge size="lg" color="indigo" radius="xl">
                Available Immediately
              </Badge>
              <Badge size="lg" color="indigo" radius="xl">
                US Timezone
              </Badge>
            </Group>

            <Group gap="lg" justify="center">
              <Button
                component="a"
                href="#contact"
                size="md"
                color="indigo"
                radius="md"
              >
                Get in Touch
              </Button>
              <Button
                component="a"
                href="#case-studies"
                variant="outline"
                size="md"
                color="indigo"
                radius="md"
              >
                View Work
              </Button>
            </Group>
            <Box mt="xl" mx="auto" style={{ maxWidth: 700 }}>


            <Card
                shadow="sm"  
                radius="md"       
                p="md"            
                withBorder={false}
                style={{ backgroundColor: 'white' }} 
              >
                
                <Group px="md" py="sm" style={{ fontWeight: 600, color: 'dimgray' }}>
                  
                  <Box style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    Email
                  </Box>
                  <Box style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    First
                  </Box>
                  <Box style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    Last Name
                  </Box>
                  <Box style={{ width: 80, textAlign: 'center' }}></Box>
                  <Box style={{ width: 80, textAlign: 'center' }}></Box>
                </Group>

                
                <Box style={{ height: 1, backgroundColor: '#e0e0e0', margin: '0 16px' }} />

              
                {items.map((item) => (
                  <Group
                    key={item.id}
                    px="md"
                    py="sm"
                    style={{
                      borderRadius: 4,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    <Box style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {item.firstname}
                    </Box>
                    <Box style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {item.email}
                    </Box>
                    <Box style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {item.lastName}
                    </Box>
                    <Box style={{ width: 80, textAlign: 'center' }}>
                      <ActionIcon color="indigo" variant="light" onClick={() => editItem(item)}>
                        <IconEdit size={16} />
                      </ActionIcon>
                    </Box>
                    <Box style={{ width: 80, textAlign: 'center' }}>
                      <ActionIcon color="red" variant="light" onClick={() => deleteItem(item.id)}>
                        <IconTrash size={16} />
                      </ActionIcon>
                    </Box>
                  </Group>
                  
                ))}

                
                <Button
                  color="indigo"
                  mt="md"
                  onClick={() => {
                    setOpened(true);
                    setEditingId(null);
                    setEmail('');
                    setfirstname('');
                    setlastName('');
                  }}
                >
                  Add User
                </Button>
              </Card>
              </Box>
            



           
            <Modal
              opened={opened}
              onClose={() => setOpened(false)}
              title={editingId !== null ? 'Edit User' : 'Add User'}
              centered
            >
              <Stack>
                <TextInput
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  error={emailError}
                />

                <TextInput
                  label="firsname"
                  value={firstname}
                  onChange={(e) => setfirstname(e.currentTarget.value)}
                />

                <TextInput
                  label="last Name"
                  value={lastName}
                  onChange={(e) => setlastName(e.currentTarget.value)}
                />

                <Button onClick={saveItem} color="indigo">
                  Save
                </Button>
              </Stack>
            </Modal>

          </motion.div>
        </div>
      </Container>
    </Box>
  );
}
