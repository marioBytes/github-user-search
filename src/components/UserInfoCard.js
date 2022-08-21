import React from 'react';
import propTypes from 'prop-types';

import useThemeDetector from '../hooks/useThemeDetector';

import Card from './Card';
import Company from './svgs/icon-company';
import Location from './svgs/icon-location';
import Twitter from './svgs/icon-twitter';
import Website from './svgs/icon-website';

const UserInfoCard = ({ user }) => {
  const isDarkTheme = useThemeDetector();

  const convertedDate = new Date(user.created_at).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  let name = user.login;
  if (user.name) {
    name = user.name;
  }

  let activeIconColor = '#4b6a9b';
  const inactiveIconColor = '#697c9a';
  if (isDarkTheme) {
    activeIconColor = '#ffffff';
  }

  return (
    <Card>
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
          <Location fill={user.location ? activeIconColor : inactiveIconColor} />
          {user.location
            ? <p>{user.location}</p>
            : <p>Not Available</p>
          }
        </div>
        <div className="card__user-link__info">
          <Website fill={user.blog ? activeIconColor : inactiveIconColor} />
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
          <Twitter fill={user.twitter_username ? activeIconColor : inactiveIconColor} />
          {user.twitter_username ? (
            <a href={`https://twitter.com/${user.twitter_username}`} target="_blank" rel="noreferrer">
              @{user.twitter_username}
            </a>
          ) : (
            <p className="inactive">Not Available</p>
          )}
        </div>
        <div className="card__user-link__info">
          <Company fill={user.company ? activeIconColor : inactiveIconColor} />
          {user.company ? <p>{user.company}</p> : <p className="inactive">Not Available</p>}
        </div>
      </div>
    </Card>
  )
}

UserInfoCard.propTypes = {
  user: propTypes.shape({
    avatar_url: propTypes.string.isRequired,
    bio: propTypes.string,
    login: propTypes.string.isRequired,
    name: propTypes.string,
  }).isRequired,
}

export default UserInfoCard;
