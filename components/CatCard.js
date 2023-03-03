import { useState } from 'react';
import { Card, Button, Text } from 'react-native-paper';

import LeftContent from './LeftContent'

// CatCard component
// props to access attributes passed to the component
export default function CatCard(props) {

    // Create count state
    const [count, setCount] = useState(0);

    return (
        <Card style={{
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
            marginBottom: props.i === props.iMax - 1 ? 10 : 0
        }}>
            {/* In JSX, enclose JavaScript in {}. The subtitle is an example of string literal templates using ``.*/}
            <Card.Title title="This is a cat photo" subtitle={`Vote is current ${count}`} left={LeftContent} />
            <Card.Content>
                {/* Access id from props */}
                <Text variant="titleLarge">This cat photo id is {props.cat.id}</Text>
            </Card.Content>
            {/* Access url from props */}
            <Card.Cover source={{ uri: props.cat.url }} />
            <Card.Actions>
                {/* On reset button press, use setCount to 0.*/}
                <Button onPress={() => setCount(0)}>Reset</Button>
                {/* On pressing down or up, take previous state and minus or plus one.*/}
                <Button onPress={() => setCount(prev => prev - 1)}>Down</Button>
                <Button onPress={() => setCount(prev => prev + 1)}>Up</Button>
            </Card.Actions>
        </Card>
    )
};