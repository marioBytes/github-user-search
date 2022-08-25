import React from 'react';
import propTypes from 'prop-types';

import useWindowWidth from '../hooks/useWindowWidth';

import Card from './Card';
import Company from './svgs/icon-company';
import Location from './svgs/icon-location';
import Skeleton from './SkeletonBase';
import Twitter from './svgs/icon-twitter';
import Website from './svgs/icon-website';

const UserInfoCard = ({ user, loading, theme }) => {
  const convertedDate = new Date(user.created_at).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  let name = user.login;
  if (user.name) {
    name = user.name;
  }

  const desktopWidth = useWindowWidth(992);
  const tabletWidth = useWindowWidth(768);

  const userMetadata = (
    <React.Fragment>
      <div>
        {loading ? (
          <p>
            <Skeleton width="25%" theme={theme} />
          </p>
        ) : user.bio ? (
          <p>{user.bio}</p>
        ) : (
          <p>This profile has no bio</p>
        )}
      </div>
      <div className="card__user-metadata">
        <div className="card__user-metadata__info">
          {loading ? (
            <React.Fragment>
              <p>
                <Skeleton theme={theme} width="4em" invert />
              </p>
              <p>
                <Skeleton theme={theme} width="2em" invert />
              </p>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <p>Repos</p>
              <p className="card__user-metadata__info__count">{user.public_repos}</p>
            </React.Fragment>
          )}
        </div>
        <div className="card__user-metadata__info">
          {loading ? (
            <React.Fragment>
              <p>
                <Skeleton width="4em" theme={theme} invert />
              </p>
              <p>
                <Skeleton width="2em" theme={theme} invert />
              </p>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <p>Followers</p>
              <p className="card__user-metadata__info__count">{user.followers}</p>
            </React.Fragment>
          )}
        </div>
        <div className="card__user-metadata__info">
          {loading ? (
            <React.Fragment>
              <p>
                <Skeleton width="4em" theme={theme} invert />
              </p>
              <p>
                <Skeleton width="2em" theme={theme} invert />
              </p>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <p>Following</p>
              <p className="card__user-metadata__info__count">{user.following}</p>
            </React.Fragment>
          )}
        </div>
      </div>
      <div className="card__user-link">
        <div className="card__user-link__info">
          {loading ? (
            <React.Fragment>
              <Skeleton circle={true} width={25} height={25} theme={theme} />
              <p>
                <Skeleton height="1em" width={120} theme={theme} />
              </p>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Location active={user.location} />
              {user.location ? <p>{user.location}</p> : <p className="inactive">Not Available</p>}
            </React.Fragment>
          )}
        </div>
        <div className="card__user-link__info">
          {loading ? (
            <React.Fragment>
              <Skeleton circle={true} width={25} height={25} theme={theme} />
              <p>
                <Skeleton height="1em" width={120} theme={theme} />
              </p>
            </React.Fragment>
          ) : (
            <React.Fragment>
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
            </React.Fragment>
          )}
        </div>
        <div className="card__user-link__info">
          {loading ? (
            <React.Fragment>
              <Skeleton circle={true} width={25} height={25} theme={theme} />
              <p>
                <Skeleton height="1em" width={120} theme={theme} />
              </p>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Twitter active={user.twitter_username} />
              {user.twitter_username ? (
                <a href={`https://twitter.com/${user.twitter_username}`} target="_blank" rel="noreferrer">
                  @{user.twitter_username}
                </a>
              ) : (
                <p className="inactive">Not Available</p>
              )}
            </React.Fragment>
          )}
        </div>
        <div className="card__user-link__info">
          {loading ? (
            <React.Fragment>
              <Skeleton circle={true} width={25} height={25} theme={theme} />
              <p>
                <Skeleton height="1em" width={120} theme={theme} />
              </p>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Company active={user.company} />
              {user.company ? <p>{user.company}</p> : <p className="inactive">Not Available</p>}
            </React.Fragment>
          )}
        </div>
      </div>
    </React.Fragment>
  );
  const userMetadataWithAvatar = desktopWidth ? (
    <div className="card__desktop-view">
      <div className="card__avatar-container">
        {loading ? (
          <Skeleton circle={true} height={tabletWidth ? 177 : 70} width={tabletWidth ? 177 : 70} theme={theme} />
        ) : (
          <img src={user.avatar_url} alt={name} className="card__avatar-container__avatar" />
        )}
      </div>
      <div className="card__desktop-view__metadata">
        <div className="card__user-top-section">
          <div>
            <div>
              <h1>{loading ? <Skeleton height="1.625rem" width={150} theme={theme} /> : name}</h1>
              <h3>{loading ? <Skeleton height="1rem" width={85} theme={theme} /> : `@${user.login}`}</h3>
            </div>
            <div>
              <p>{loading ? <Skeleton height="0.9375rem" width={105} theme={theme} /> : `Joined: ${convertedDate}`}</p>
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
          {loading ? (
            <Skeleton circle={true} height={117} width={117} theme={theme} />
          ) : (
            <img src={user.avatar_url} alt={name} className="card__avatar-container__avatar" />
          )}
        </div>
        <div>
          <div>
            <h1>{loading ? <Skeleton height="1.625rem" width={150} theme={theme} /> : name}</h1>
            <h3>{loading ? <Skeleton height="1rem" width={85} theme={theme} /> : `@${user.login}`}</h3>
          </div>
          <div>
            <p>{loading ? <Skeleton height="0.9375rem" width={105} theme={theme} /> : `Joined: ${convertedDate}`}</p>
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
