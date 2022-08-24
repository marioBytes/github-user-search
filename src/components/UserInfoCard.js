import React from 'react';
import propTypes from 'prop-types';

import useWindowWidth from '../hooks/useWindowWidth';

import Card from './Card';
import Company from './svgs/icon-company';
import Location from './svgs/icon-location';
import Twitter from './svgs/icon-twitter';
import Website from './svgs/icon-website';

const UserInfoCard = ({ user }) => {
  const convertedDate = new Date(user.created_at).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  let name = user.login;
  if (user.name) {
    name = user.name;
  }

  const width = useWindowWidth(992);

  const userMetadata = (
    <React.Fragment>
      <div>{user.bio ? <p>{user.bio}</p> : <p>This profile has no bio</p>}</div>
      <div className="card__user-metadata">
        <div className="card__user-metadata__info">
          <p>Repos</p>
          <p className="card__user-metadata__info__count">{user.public_repos}</p>
        </div>
        <div className="card__user-metadata__info">
          <p>Followers</p>
          <p className="card__user-metadata__info__count">{user.followers}</p>
        </div>
        <div className="card__user-metadata__info">
          <p>Following</p>
          <p className="card__user-metadata__info__count">{user.following}</p>
        </div>
      </div>
      <div className="card__user-link">
        <div className="card__user-link__info">
          <Location active={user.location} />
          {user.location ? <p>{user.location}</p> : <p>Not Available</p>}
        </div>
        <div className="card__user-link__info">
          <Website active={user.blog} />
          {user.blog ? (
            <a
              href={user.blog.includes('http') || user.blog.includes('https') ? user.blog : `https://${user.blog}`}
              target="_blank"
              rel="noreferrer"
            >
              {user.blog}
            </a>
          ) : (
            <p className="inactive">Not Available</p>
          )}
        </div>
        <div className="card__user-link__info">
          <Twitter active={user.twitter_username} />
          {user.twitter_username ? (
            <a href={`https://twitter.com/${user.twitter_username}`} target="_blank" rel="noreferrer">
              @{user.twitter_username}
            </a>
          ) : (
            <p className="inactive">Not Available</p>
          )}
        </div>
        <div className="card__user-link__info">
          <Company active={user.company} />
          {user.company ? <p>{user.company}</p> : <p className="inactive">Not Available</p>}
        </div>
      </div>
    </React.Fragment>
  );
  const userMetadataWithAvatar = width ? (
    <div className="card__desktop-view">
      <div className="card__avatar-container">
        <img src={user.avatar_url} alt={name} className="card__avatar-container__avatar" />
      </div>
      <div className="card__desktop-view__metadata">
        <div className="card__user-top-section">
          <div>
            <div>
              <h1>{name}</h1>
              <h3>{`@${user.login}`}</h3>
            </div>
            <div>
              <p>Joined: {convertedDate}</p>
            </div>
          </div>
        </div>
        {userMetadata}
      </div>
    </div>
  ) : (
    <React.Fragment>
    <div className="card__user-top-section">
      <div className="card__avatar-container">
        <img src={user.avatar_url} alt={name} className="card__avatar-container__avatar" />
      </div>
      <div>
        <div>
          <h1>{name}</h1>
          <h3>{`@${user.login}`}</h3>
        </div>
        <div>
          <p>Joined: {convertedDate}</p>
        </div>
      </div>
    </div>
    {userMetadata}
  </React.Fragment>
  );

  return <Card>{userMetadataWithAvatar}</Card>;
};

UserInfoCard.propTypes = {
  user: propTypes.shape({
    avatar_url: propTypes.string.isRequired,
    bio: propTypes.string,
    login: propTypes.string.isRequired,
    name: propTypes.string,
  }).isRequired,
};

export default UserInfoCard;
