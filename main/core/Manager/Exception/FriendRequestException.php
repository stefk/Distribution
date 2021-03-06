<?php

/*
 * This file is part of the Claroline Connect package.
 *
 * (c) Claroline Consortium <consortium@claroline.net>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Claroline\CoreBundle\Manager\Exception;

class FriendRequestException extends \Exception
{
    private $url;

    public function __construct($message, $url)
    {
        parent::__construct($message);
        $this->url = $url;
    }

    public function getUrl()
    {
        return $this->url;
    }
}
