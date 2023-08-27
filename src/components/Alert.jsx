const Alert = ({ children, color }) => {
    return (
        <>
            <div className={`alert alert-${color}`}>{children}</div>
        </>
    )
}

export default Alert