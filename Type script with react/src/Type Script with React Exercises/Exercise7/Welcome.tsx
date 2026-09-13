// interface WelcomeProps {
//   username: string;
//   isPremium: boolean;
// }


type WelcomeProps = {
  username: string;
  isPremium: boolean;
};
function Welcome({ username, isPremium }: WelcomeProps) {
  return (
    <div>
      <h2>Hello, {username}</h2>

      {isPremium ? (
        <p>Welcome back, premium user!</p>
      ) : (
        <p>Welcome, guest</p>
      )}
    </div>
  );
}

export default Welcome;