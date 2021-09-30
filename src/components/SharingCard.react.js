/* eslint react/prop-types: 0 */

import React from 'react';

import EditFormSection from './EditFormSection.react';

const SharingCard = (
  {
    project,
    invitationEmail,
    sendingInvitationEmail,
    onUserRevoke,
    onInvitationEmailChange,
    onInvitationSend,
    onInvitationRevoke,
  }
) => <EditFormSection
  className="mr-sharing-card"
  title="Sharing Settings"
  icon="share"
>
  <ul className="mdl-list">
    {
      Array.isArray(project.sharedWith) && project.sharedWith.map(
        (user, index) => (
          <li key={`${index}-${user.name}-${user.email}`} className="mdl-list__item mdl-list__item--two-line">
            <span className="mdl-list__item-primary-content">
              <img className="mdl-list__item-avatar" src={user.photo} />
              <span>{user.name}</span>
              <span className="mdl-list__item-sub-title">{user.email || 'No email address'}</span>
            </span>
            <span className="mdl-list__item-secondary-action">
              <button
                className="mdl-button mdl-button--icon"
                title={`Remove ${user.name}`}
                onClick={() => onUserRevoke(user.email)}
              >
                <i className="material-icons">clear</i>
              </button>
            </span>
          </li>
        )
      )
    }
    {
      Array.isArray(project.invitations) && project.invitations.map(
        (user) => (
          <li key={user.email} className="mdl-list__item mdl-list__item--two-line">
            <i className="material-icons">hourglass_empty</i>
            <span className="mdl-list__item-primary-content" title="Pending">
              <span>{user.email}</span>
              <span className="mdl-list__item-sub-title">Invited at { (new Date(user.datetime)).toLocaleString() }</span>
            </span>
            <span className="mdl-list__item-secondary-action">
              <button
                className="mdl-button mdl-button--icon"
                title="Revoke invitation"
                onClick={() => onInvitationRevoke(user.email)}
              >
                <i className="material-icons">clear</i>
              </button>
            </span>
          </li>
        )
      )
    }
    <li className="mdl-list__item mdl-list__item--two-line">
      <i className="material-icons">add_circle</i>
      <span className="mdl-list__item-primary-content">
        <span>Invite people:</span>
        <div className="mdl-textfield mdl-js-textfield">
          <input
            className="mdl-textfield__input"
            type="email"
            value={invitationEmail}
            id="invitationEmail"
            onChange={onInvitationEmailChange}
          />
          <label className="mdl-textfield__label" htmlFor="invitationEmail">Email address:</label>
          <span className="mdl-textfield__error">Type a valid email address.</span>
        </div>
      </span>
      <span className="mdl-list__item-secondary-action">
        <button
          className="mdl-button mdl-button--icon"
          title="Send invitation email"
          onClick={onInvitationSend}
        >
        <i className="material-icons">send</i>
        </button>
      </span>
      {
        sendingInvitationEmail && (
          <span className="mr-inline-overlay">
            Sending email...
          </span>
        )
      }
    </li>
  </ul>
</EditFormSection>;

export default SharingCard;
