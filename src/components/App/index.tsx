import React, {ChangeEvent, useState} from 'react'
import {Button, ChakraProvider, Flex, Heading, Input, List, ListIcon, Text} from "@chakra-ui/react"
import {addTodo, removeTodo, toggleTodo} from "../../actions";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {ITodo} from "../../types";

const App = () => {
    const [text, setText] = useState<string>('')
    const dispatch = useDispatch()
    const changeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
        const {value} = evt.target;
        setText(value)
    }
    const todos = useSelector((state: RootStateOrAny) => state.todos.todos)
    return (
        <ChakraProvider>
            <Flex justify="center" align="center" flexDirection="column" mt={250}>
                <Heading as="h2" size="2xl" mb={4}>
                    Todos App
                </Heading>
                <form onSubmit={(evt) => {
                    evt.preventDefault()
                    if (!text || /^\s*$/.test(text)) {
                        return
                    }
                    dispatch(addTodo(text))
                    setText('')
                }}>
                    <Input
                        colorScheme="green"
                        size="md"
                        value={text}
                        onChange={changeHandler}
                    />
                </form>
                <List spacing={1}>
                    {todos.length > 0 ? todos.map((todo: ITodo, idx: number) => (
                        <Flex
                            justify="space-between"
                            align="center"
                            key={idx}
                            p={2}
                            w={300}
                        >
                            <Flex
                                onClick={() => dispatch(toggleTodo(idx))}
                                key={text}
                                align="center"
                                style={{textDecoration: todo.completed ? 'line-through' : '', cursor: 'pointer'}}
                            >
                                <ListIcon color="green.500"/>
                                <Text mr={2}>{todo.text}</Text>
                            </Flex>
                            <Button colorScheme="red" size="sm" onClick={() => dispatch(removeTodo(todo))}>
                                X
                            </Button>
                        </Flex>
                    )): <Heading mt={4} as="h3" size="md">
                        No todos yet...
                    </Heading>}
                </List>
            </Flex>
        </ChakraProvider>
    )
}

export default App
