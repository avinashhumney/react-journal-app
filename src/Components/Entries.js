import React from 'react';
import { Container, Row, Button, Col } from 'reactstrap';

const EntryHeader = () => {
    return <h3></h3>
}

const EntryBody = props => {
    const lines = props.entryData.map((line, index) => {
        return (
            <Container key={index} className="shadow p-3 mb-5 bg-white rounded">
                <Row>
                    <Col>
                        <h2>{line.title}</h2>
                        <small>{Date()}</small>
                        <p>{line.body}</p>
                        <Button
                            onClick={() => props.removeEntry(index)}
                            color="primary">Delete</Button>
                    </Col>
                </Row>
            </Container>
        )
    })

    return (
        <div>
            {lines}
        </div>
    )
}

const Entries = (props) => {

    const { entryData, removeEntry } = props;

    return (
        <div>
            <h2>My Entries</h2>

            <EntryHeader />
            <EntryBody entryData={entryData} removeEntry={removeEntry} />
        </div>

    )

}

export default Entries;