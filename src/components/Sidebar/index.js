import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistActions } from '../../store/ducks/playlists';

import { Container, NewPlaylist, Nav } from './styles';

import Loading from '../Loading';

import AddPlayListIcon from '../../assets/images/add_playlist.svg';

class Sidebar extends Component {
  static propTypes = {
    getPlaylistsRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
        }),
      ),
      loading: PropTypes.bool,
    }).isRequired,
  };

  componentDidMount() {
    const { getPlaylistsRequest } = this.props;
    getPlaylistsRequest();
  }

  render() {
    const { playlists } = this.props;
    return (
      <Container>
        <div>
          <Nav main>
            <li>
              <Link to="/">Navegar</Link>
            </li>
            <li>
              <a href="/">Rádio</a>
            </li>
          </Nav>
          <Nav>
            <li>
              <span>Sua Biblioteca</span>
            </li>
            <li>
              <a href="/">Seu Daily Mix</a>
            </li>
            <li>
              <a href="/">Tocados recentemente</a>
            </li>
            <li>
              <a href="/">Músicas</a>
            </li>
            <li>
              <a href="/">Álbuns</a>
            </li>
            <li>
              <a href="/">Artistas</a>
            </li>
            <li>
              <a href="/">Estações</a>
            </li>
            <li>
              <a href="/">Arquivos locais</a>
            </li>
            <li>
              <a href="/">Vídeos</a>
            </li>
            <li>
              <a href="/">Podcasts</a>
            </li>
          </Nav>
          <Nav>
            <li>
              <span>Playlists</span>
              {playlists.loading && <Loading />}
            </li>
            {playlists.data.map(playlist => (
              <li key={playlist.id}>
                <Link to={`/playlists/${playlist.id}`}>{playlist.title}</Link>
              </li>
            ))}
          </Nav>
        </div>
        <NewPlaylist>
          <img src={AddPlayListIcon} alt="Adicionar playlist" />
          Nova playlist
        </NewPlaylist>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
