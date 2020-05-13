import React, { useEffect, useCallback, useState } from 'react'
import {
    MDBContainer, MDBRow, MDBCol, MDBCard,
    MDBCardBody, MDBCardTitle, MDBBtn, MDBModal,
    MDBModalBody, MDBModalFooter, MDBModalHeader,
    MDBInput, MDBIcon
} from 'mdbreact'
import { useNotes } from '../hooks/context/notesContext'

const HomePage = () => {
    const notes = useNotes()
    const stableGetAll = useCallback(notes.getAll, [])
    let [isOpen, setisOpen] = useState(false)
    const [Title, setTitle] = useState('')
    const [Description, setDescription] = useState('')

    useEffect(() => {
        stableGetAll()
    }, [stableGetAll])


    async function DeleteNote(id) {
        await notes.deleteNote(id)
        stableGetAll()
    }

    function mapStateArray() {
        return (
            notes.state.array.map((item, index) => {
                return (
                    <MDBCol size="4" key={index} className="my-2" >
                        <MDBCard>
                            <MDBCardTitle>
                                {item.title}
                            </MDBCardTitle>
                            <MDBCardBody>
                                <div>
                                    {item.description}
                                </div>
                                <MDBIcon
                                    icon="trash-alt"
                                    size="lg"
                                    className="mt-3"
                                    onClick={() => DeleteNote(item._id)}
                                />
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                )
            })
        )
    }

    function toggle() {
        setisOpen(isOpen = !isOpen)
    }

    async function send() {
        const body = { title: Title, description: Description }
        await notes.createNote(body)
        toggle()
        stableGetAll()
    }

    function modal() {
        return (
            <MDBModal isOpen={isOpen} toggle={toggle} size="lg">
                <MDBModalHeader toggle={toggle}>MDBModal title</MDBModalHeader>
                <MDBModalBody>
                    <MDBInput onChange={e => setTitle(e.target.value)} label="title" />
                    <MDBInput onChange={e => setDescription(e.target.value)} label="descirption" />
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn color="secondary" onClick={toggle}>Close</MDBBtn>
                    <MDBBtn onClick={send} color="primary">Save changes</MDBBtn>
                </MDBModalFooter>
            </MDBModal>
        )
    }

    return (
        <MDBContainer className="my-5">
            <MDBBtn onClick={toggle} className="my-4">
                create
            </MDBBtn>
            <MDBRow center>
                {notes.state.fetching === true &&
                    <div>
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                        <div className="spinner-border text-success" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                        <div className="spinner-border text-danger" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                        <div className="spinner-border text-warning" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                        <div className="spinner-border text-info" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                }
                {mapStateArray()}
                {modal()}
            </MDBRow>
        </MDBContainer>
    )
}

export default HomePage
