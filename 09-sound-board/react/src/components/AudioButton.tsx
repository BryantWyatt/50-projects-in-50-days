import "./AudioButton.css";

interface AudioBottonProps {
    name: string;
    source: string;
    onClick(name: string): void;
}

const AudioButton = ({ name, source, onClick }: AudioBottonProps) => {
    return <>
        <audio id={name} src={source}></audio>
        <button className={"btn"} onClick={() => onClick(name)}>{name}</button>
    </>

}

export default AudioButton;
