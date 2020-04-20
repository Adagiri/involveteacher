import React, {useEffect}  from "react";
import {
  Grid,
  Label,
  Segment,
  Message
} from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Term from "../../components/Terms/terms";
import { signOutStart, portal } from "../../redux/auth/auth.actions";
import { fetchTopicsStart } from "../../redux/topics/topics.actions";
import { createStructuredSelector } from "reselect";
import { getTopicsList } from "../../redux/topics/topics.selectors";
import Dtemplate from "../../components/DTemplate/dtemplate";

const Dashboard = ({jss1TopicList, fetchTopicsStart}) => {

  useEffect(() => {
    fetchTopicsStart()
  }, []);

  return (
    <Dtemplate>
    <div
    className="pusher"
    style={{
      minHeight: "100vh",
      background: " #09203f",
      height: "100vh",
      overflow: "hidden",
    }}
  >
    <div
      className="main-content"
      style={{
        minHeight: "100%",
        padding: "3em",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Grid>
        <Grid.Row>
          <Label size="huge" style={{background: "teal", color: "rgba(255,255,255, 0.8)"}}>
            Mathematics
          </Label>
          <Label size="huge" style={{background: "orange", color: "rgba(255,255,255, 0.8)"}}>
          {jss1TopicList.length} topics present
        </Label>
        </Grid.Row>

        <Grid.Row centered >
        <Segment loading={jss1TopicList.length === 0} style={{background: "transparent", display: "flex", justifyContent: "center"}}>
        { jss1TopicList.length > 0 ? <Term cards={jss1TopicList} status="topics" />: ""}
        </Segment>
         
        </Grid.Row>
      </Grid>
    </div>
  </div>
    </Dtemplate>
   
  )
}

const mapStateToProps = createStructuredSelector({
  jss1TopicList: getTopicsList,
});

export default connect(mapStateToProps, { fetchTopicsStart, signOutStart, portal })(
  withRouter(Dashboard)
);