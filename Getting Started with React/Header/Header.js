function Header({title}){
    return (
        <>
            <Logo/>
            <Title title={title}/>
            <Nav/>
        </>
    )
} 

function Logo(){
    return (
        <h1>Logo</h1>
    )
} 

function Title(props){
    return (
        <h1>{props.title ? createTitle(props.title) : 'Default Title'}</h1>
    )
} 

function Nav(){
    return (
        <h1>Nav</h1>
    )
} 

function createTitle(title){
    return `This title is parsed by function: ${title}`;
}