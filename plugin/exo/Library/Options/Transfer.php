<?php

namespace UJM\ExoBundle\Library\Options;

/**
 * Defines Serializers options.
 */
final class Transfer
{
    /**
     * Only serializes minimal data of the Entity.
     *
     * @var string
     */
    const MINIMAL = 'minimal';

    /**
     * Adds administrations info in the serialized data.
     *
     * @var string
     */
    const INCLUDE_ADMIN_META = 'includeAdminMeta';

    /**
     * Adds solutions info in the serialized data.
     *
     * @var string
     */
    const INCLUDE_SOLUTIONS = 'includeSolutions';

    /**
     * Adds user scores in the serialized data.
     *
     * @var string
     */
    const INCLUDE_USER_SCORE = 'includeUserScore';

    /**
     * Applies shuffle to the answers of a question.
     */
    const SHUFFLE_ANSWERS = 'shuffleAnswers';

    /**
     * Uses uuids generated by the server when creating new entities instead of the client generated ones.
     */
    const USE_SERVER_IDS = 'useServerIds';
}
