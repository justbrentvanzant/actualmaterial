/*
<!--Grid column-->
          <div class="col-lg-5 col-xl-4 mb-4">
            <!--Featured image-->
            <div class="view overlay rounded z-depth-1">
              <img src="https://i.barkpost.com/wp-content/uploads/2015/02/featmeme.jpg?q=70&fit=crop&crop=entropy&w=808&h=500" class="img-fluid"
                alt="">
            </div>
          </div>
          <!--Grid column-->
          
          <!--Grid column-->
          <div class="col-lg-7 col-xl-7 ml-xl-4 mb-4">
            <h3 class="mb-3 font-weight-bold dark-grey-text">
              <strong>Club Name</strong>
            </h3>
            <p class="grey-text">Cool club description with lots of memes.</p>
            <a target="_blank"
              class="btn btn-primary btn-md">Eight
            </a>
            <a target="_blank"
                    class="btn btn-secondary btn-md">Tags
                  </a>
            <a target="_blank"
                    class="btn btn-danger btn-md">Is
                  </a>
            <a target="_blank"
                    class="btn btn-success btn-md">A
                  </a>
            <a target="_blank"
                    class="btn btn-info btn-md">Large
                  </a>
            <a target="_blank"
                    class="btn btn-default btn-md">Amount
                  </a>
            <a target="_blank"
                    class="btn btn-warning btn-md">Of
                  </a>
            <a target="_blank"
                    class="btn btn-primary btn-md">Tags
            </a>
          </div>
          <!--Grid column--></div>

*/

var eachSub = React.createClass({
  render: function(props) {
    /* For loop to get all the tags from props */
    const tags = [];
    for (const [index, tagName] of props.clubTags.entries()) {
      tags.push(<a key={index}>{tagName}</a>);
    }

    return (
      <div>
        {/*Grid column*/}
        <div className="col-lg-5 col-xl-4 mb-4">
          {/*Featured image*/}
          <div className="view overlay rounded z-depth-1">
            <img src={props.clubPicture} className="img-fluid" alt="" />
          </div>
        </div>
        {/*Grid column*/}
        {/*Grid column*/}
        <div className="col-lg-7 col-xl-7 ml-xl-4 mb-4">
          <h3 className="mb-3 font-weight-bold dark-grey-text">
            <strong>{props.clubName}</strong>
          </h3>
          <p className="grey-text">{props.clubDiscription}</p>
          {/* Show all the tags in of a club*/}
          <div>{tags}</div>
        </div>
        {/*Grid column*/}
      </div>
    );
  }
});

export default Sub;
