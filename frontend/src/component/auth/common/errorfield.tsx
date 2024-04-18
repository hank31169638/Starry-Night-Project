import { useSpring, animated } from 'react-spring';
interface ErrorFieldProps {
    error: string
}

const ErrorField = ({ error }:ErrorFieldProps) => {

  const fade = useSpring({
    opacity: error ? 1 : 0, // according to whether it is error
    from: { opacity: 0 }, // opacity when animation starts
    config: { duration: 500 } // animation duration
  });

  return (
    <animated.div style={fade}>
      {error && <p style={{ color: 'red',textAlign:'center'}}>{error}</p>}
    </animated.div>
  );
};

export default ErrorField;