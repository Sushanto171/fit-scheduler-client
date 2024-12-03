const LogIn = () => {
  const [value, onChange] = useState < Value > new Date();

  return (
    <div>
      <DateTimePicker onChange={onChange} value={value} />
    </div>
  );
};

export default LogIn;
