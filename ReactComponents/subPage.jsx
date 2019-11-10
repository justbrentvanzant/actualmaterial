import Sub from "./sub";
import Info from "./clubInfo";

var subPage = React.createClass({
  render: function() {
    return (
      <div>
        <h2 class="h1 text-center mb-5">Subscriptions</h2>
        {Info.map(m => (
          <Sub {...m}></Sub>
        ))}
      </div>
    );
  }
});

export default subPage;
