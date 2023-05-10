export const Input = (props: any) => {
    return (
        <div>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input}/>
        </div>
    );
}